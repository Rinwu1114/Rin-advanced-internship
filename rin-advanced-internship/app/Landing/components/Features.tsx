import { AiFillAudio, AiFillBulb, AiFillFileText } from "react-icons/ai";

export default function Features() {
  return (
    <section id="features">
      <div className="container mx-auto ">
        <div className="row ">
          <div className="text-3xl text-[#032b41] text-center mb-8 font-bold">
            Understand books in few minutes
          </div>
          <div className="flex grid grid-cols-3 gap-10 mb-24">
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillFileText className="w-15 h-15 fill-[#032b41]" />
              </div>
              <div className="text-2xl mb-4 font-medium text-[#032b41]">
                Read or listen
              </div>
              <div className="text-[#394547] font-light text-lg leading-normal">
                Save time by getting the core ideas from the best books.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillBulb className="w-15 h-15 fill-[#032b41]" />
              </div>
              <div className="text-2xl mb-4 font-medium text-[#032b41]">
                Find your next read
              </div>
              <div className="text-[#394547] font-light text-lg leading-normal">
                Explore book lists and personalized recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex justify-center mb-2 fill-[#032b41]">
                <AiFillAudio className="w-15 h-15 fill-[#032b41]" />
              </div>
              <div className="text-2xl mb-4 font-medium text-[#032b41]">
                Briefcasts
              </div>
              <div className="text-[#394547] font-light text-lg leading-normal">
                Gain valuable insights from briefcasts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}