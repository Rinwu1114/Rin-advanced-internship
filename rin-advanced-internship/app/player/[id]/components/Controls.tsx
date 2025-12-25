'use client'

import { togglePlayPause, skipForward, Rewind } from "@/app/redux/slices/audioPlayerSlice";
import { useDispatch, useSelector } from "react-redux"; 
import { RootState } from "@/app/redux/store";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import { MdOutlineReplay10 } from "react-icons/md";
import { MdForward10 } from "react-icons/md";

export default function AudioControls() {
  const dispatch = useDispatch();

  const { isPlaying } = useSelector((state: RootState) => state.AudioBookPlayer)
  
  const handlePlayPause = () => {
    dispatch(togglePlayPause())
  }
  const handleForward = () => {
  dispatch(skipForward(10)); 
};
  const handleRewind = () => {
    dispatch(Rewind(10))
  }
  return (

    <div className="audio__controls--wrapper w-1/3">
      <div className="audio__controls flex items-center justify-center gap-6">
        <button className="controls__btn rounded-[50%] cursor-pointer">
          <MdOutlineReplay10 className="w-9 h-9 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"
            onClick={handleRewind}/>
        </button>
        <button className="controls__btn--play rounded-[50%] cursor-pointer">
          {
            isPlaying ?
              <FaPauseCircle className="w-10 h-10 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"
                onClick={handlePlayPause} />
              :
              <FaCirclePlay className="w-10 h-10 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"
                onClick={handlePlayPause} />
          }
        </button>
        <button className="controls__btn rounded-[50%] cursor-pointer">
          <MdForward10 className="w-9 h-9 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"
           onClick={handleForward}/>
        </button>
      </div>
    </div>
  )
}