import { AiFillFileText } from "react-icons/ai";
import { RiPlantFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import PlanSelection from "./PlanSelection";

export default function Plan() {
  return (
    <>
      <div className="plan__features--wrapper flex grid grid-cols-3
      items-center text-center gap-6 max-w-[800px] mb-14">
        <div className="plan__features">
          <figure className="icon flex justify-center mb-3">
            <AiFillFileText className="w-15 h-15 fill-[#032b41]"/>
          </figure>
          <div className="feature__text text-[#394547] leading-[1.5]">
            <b>Key ideas in a few minutes</b> with many books to read
          </div>
        </div>
        <div className="plan__features">
          <figure className="icon flex justify-center mb-3">
            <RiPlantFill className="w-15 h-15 fill-[#032b41]"/>
          </figure>
          <div className="feature__text text-[#394547] leading-[1.5]">
            <b>3 million</b> people growing with Summarist everyday
          </div>
        </div>
        <div className="plan__features">
          <figure className="icon flex justify-center mb-3">
            <FaHandshake className="w-15 h-15 fill-[#032b41]"/>
          </figure>
          <div className="feature__text text-[#394547] leading-[1.5]">
            <b>Precise recommendations</b> collections curated by experts
          </div>
        </div>
      </div>
      <div className="section__title text-[32px] text-[#032b41] font-bold
      text-center mb-8">Choose the plan that fits you</div>
      <PlanSelection />
    </>
  );
}
