import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

export default function Features() {
  return (
    <section id="features">
      <div className="w-full pt-10 mx-auto ">
        <div className="row ">
          <div className="md:text-3xl text-2xl text-[#032b41] text-center mb-8 font-bold">
            Understand books in few minutes
          </div>
          <div className="flex grid grid-cols-1 gap-10 mb-24
          md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillFileText className="md:w-15 md:h-15 w-12 h-12 fill-[#032b41]" />
              </div>
              <div className="md:text-2xl text-xl mb-4 font-medium text-[#032b41]">
                Read or listen
              </div>
              <div className="text-[#394547] font-light md:text-lg text-sm leading-normal">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillBulb className="md:w-15 md:h-15 w-12 h-12 fill-[#032b41]" />
              </div>
              <div className="md:text-2xl text-xl mb-4 font-medium text-[#032b41]">
                Find your next read
              </div>
              <div className="text-[#394547] font-light md:text-lg text-sm leading-normal">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillAudio className="md:w-15 md:h-15 w-12 h-12 fill-[#032b41]" />
              </div>
              <div className="md:text-2xl text-xl mb-4 font-medium text-[#032b41]">
                Briefcasts
              </div>
              <div className="text-[#394547] font-light md:text-lg text-sm leading-normal">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}