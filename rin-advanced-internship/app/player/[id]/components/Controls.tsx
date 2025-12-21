import { FaCirclePlay } from "react-icons/fa6";
import { MdOutlineReplay10 } from "react-icons/md";
import { MdForward10 } from "react-icons/md";


export default function AudioControls({ playerInfo }: { playerInfo: any }){
    return(
        <div className="audio__controls--wrapper w-1/3">
        <div className="audio__controls flex items-center justify-center gap-6">
          <button className="controls__btn rounded-[50%] cursor-pointer">
            <MdOutlineReplay10 className="w-9 h-9 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"/>
          </button>
          <button className="controls__btn--play rounded-[50%] cursor-pointer">
            <FaCirclePlay className="w-10 h-10 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"/>
          </button>
          <button className="controls__btn rounded-[50%] cursor-pointer">
            <MdForward10 className="w-9 h-9 text-[#fff] transition-color
            hover:text-[#2bd97c] duration-150 ease"/>
          </button>
        </div>
      </div>
    )
}