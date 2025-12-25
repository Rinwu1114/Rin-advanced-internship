"use client"
import { useDispatch, useSelector } from "react-redux"; 
import { RootState } from "@/app/redux/store";
import { setDuration, updateProgress } from "@/app/redux/slices/audioPlayerSlice";

export default function ProgressBar(){


  const { currentTime, duration } = useSelector((state: RootState) => state.AudioBookPlayer)
  const dispatch = useDispatch()
  

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    return `${min}:${sec.toString().padStart(2,'0')}`
  }
  
  return(
    <div className="audio__progress--wrapper w-1/3 flex items-center gap-4">
        <div className="audio__time text-[#fff] text-sm">{formatTime(currentTime)}</div>
        <input type="range" className="audio__progress--bar rounded-lg max-w-[300px]
        w-full cursor-pointer outline-none h-1" />
        <div className="audio__time text-[#fff] text-sm">{formatTime(duration)}</div>
      </div>
 )
}