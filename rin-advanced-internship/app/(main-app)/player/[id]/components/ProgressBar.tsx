"use client";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/app/redux/store";
import { formatTime } from "./FormatTime";
import useAudioDuration from "@/app/hooks/useAudioDuration";
import DisplayDuration from "./Duration";
import { userSeekTo } from "@/app/redux/slices/audioPlayerSlice";
import { updateBookProgress } from "@/app/firebase/services/libraryServices";

export default function ProgressBar({ playerInfo }: { playerInfo: any }) {
  const user = useSelector((state: RootState) => state.AuthState.user);
  const { currentTime } = useSelector(
    (state: RootState) => state.AudioBookPlayer
  );
  const dispatch = useDispatch();
  const duration = useAudioDuration(playerInfo.audioLink);
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const [seeking, setSeeking] = useState(false);
  const [tempTime, setTempTime] = useState(0);
  const isFinished = progressPercent >= 99.9;

  const handleSeeking = () => {
    setSeeking(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setTempTime(newTime);
  };

  const handleSeekEnd = () => {
    dispatch(userSeekTo(tempTime));
    setSeeking(false);
  };

  useEffect(() => {
    const updateFirestoreBookProgress = async () => {
      if (!user || !playerInfo?.id) return;

      try {
        await updateBookProgress(
          user.uid,
          playerInfo.id,
          progressPercent,
          isFinished
        );
      } catch (error) {
        console.error("Failed to save progress:", error);
      }
    };

    const shouldUpdate =
      progressPercent === 100 ||
      Math.abs(progressPercent % 10) < 0.01 ||
      isFinished;

    if (shouldUpdate) {
      updateFirestoreBookProgress();
    }
  }, [progressPercent, user, playerInfo?.id, isFinished]);

  return (
    <div className="audio__progress--wrapper md:w-1/3 w-full justify-center flex items-center gap-4">
      <div className="audio__time text-[#fff] text-sm">
        {seeking ? formatTime(tempTime) : formatTime(currentTime)}
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
