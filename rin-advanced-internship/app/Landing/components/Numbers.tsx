import { BiCrown } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiLeafLine } from "react-icons/ri";

export default function Reviews() {
  return (
    <section id="numbers">
      <div className="container mx-auto">
        <div className="row">
          <div className="md:text-3xl text-2xl text-[#032b41] text-center mb-8 font-bold">
            Start growing with Summarist now
          </div>
          <div
            className="grid grid-cols-1 gap-6 md:gap-10
          md:grid-cols-3"
          >
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-15 gap-1 text-[#0365f2]">
                <BiCrown className="h-12 w-12" />
              </div>
              <div className="text-[#032b41] font-semibold mb-4 text-[32px] md:text-[40px]">
                3 Million
              </div>
              <div className="color-[#394547] font-light text-sm md:text-base">
                Downloads on all platforms
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-15 gap-1 text-[#0365f2] w-30">
                <BsStarFill className="h-10 w-10" />
                <BsStarFill className="h-10 w-10" />
                <BsStarFill className="h-10 w-10" />
                <BsStarFill className="h-10 w-10" />
                <BsStarHalf className="h-10 w-10" />
              </div>
              <div className="text-[#032b41] font-semibold mb-4 text-[32px] md:text-[40px]">
                4.5 Stars
              </div>
              <div className="color-[#394547] font-light text-sm md:text-base">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="bg-[#d7e9ff] flex flex-col items-center text-center p-6 pb-10 rounded-xl">
              <div className="flex items-center h-15 gap-1 text-[#0365f2]">
                <RiLeafLine className="h-12 w-12" />
              </div>
              <div className="text-[#032b41] font-semibold mb-4 text-[32px] md:text-[40px]">
                97%
              </div>
              <div className="color-[#394547] font-light text-sm md:text-base">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
