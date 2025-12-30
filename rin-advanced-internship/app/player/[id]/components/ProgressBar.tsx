"use client";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "@/app/redux/store";
import { formatTime } from "./FormatTime";
import useAudioDuration from "@/app/hooks/useAudioDuration";
import DisplayDuration from "./Duration";
import { userSeekTo } from "@/app/redux/slices/audioPlayerSlice";

export default function ProgressBar({ playerInfo }: { playerInfo: any }) {
  const { currentTime } = useSelector(
    (state: RootState) => state.AudioBookPlayer
  );
  const dispatch = useDispatch()
  const duration = useAudioDuration(playerInfo.audioLink);
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const [seeking, setSeeking] = useState(false)
  const [tempTime, setTempTime] = useState(0) 
  
  
  const handleSeeking = () =>{
    setSeeking(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setTempTime(newTime)
  }

  const handleSeekEnd = () => {
    dispatch(userSeekTo(tempTime))
    setSeeking(false)
  }
  

  return (
    <div className="audio__progress--wrapper w-1/3 flex items-center gap-4">
      <div className="audio__time text-[#fff] text-sm">
        {seeking? formatTime(tempTime) : formatTime(currentTime)}
      </div>
      <input
        type="range"
        className="audio__progress--bar rounded-lg max-w-[300px]
        w-full cursor-pointer outline-none h-1"
        style={
          {
            "--range-progress": `${progressPercent}%`,
          } as React.CSSProperties
        }
        value={seeking ? tempTime : currentTime}
        min="0"
        max={duration || 100}
        onChange={handleChange}
        onMouseDown={handleSeeking}
        onMouseUp={handleSeekEnd}
      />
      <div className="audio__time text-[#fff] text-sm">
        <DisplayDuration playerInfo={playerInfo} />
      </div>
    </div>
  );
}
