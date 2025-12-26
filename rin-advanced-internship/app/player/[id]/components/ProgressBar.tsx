"use client"

import { useSelector } from "react-redux"; 
import { RootState } from "@/app/redux/store";
import { formatTime } from "./FormatTime";
import DisplayDuration from './Duration'

export default function ProgressBar(){

  const { currentTime } = useSelector((state: RootState) => state.AudioBookPlayer)
 
  
  return(
    <div className="audio__progress--wrapper w-1/3 flex items-center gap-4">
        <div className="audio__time text-[#fff] text-sm">{formatTime(currentTime)}</div>
        <input type="range" className="audio__progress--bar rounded-lg max-w-[300px]
        w-full cursor-pointer outline-none h-1" />
        <div className="audio__time text-[#fff] text-sm"><DisplayDuration /></div>
      </div>
 )
}