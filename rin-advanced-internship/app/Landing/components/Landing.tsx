import Image from "next/image";
import landingimg from "../../../public/assets/landing.png"

export default function LandingComponent() {
  return (
    <section id="landing">
      <div className="container mx-auto">
        <div className="row ">
          <div className="flex ">
            <div className="md:w-full md:flex-row md:items-start md:text-left
            flex-col items-center text-center max-w-[540px] mx-auto">
              <div className="text-[#032b41] font-bold text-2xl w-full mb-6  
              md:text-4xl">
                Gain more knowledge <br className="hidden md:block" />
                in less time
              </div>
              <div className="text-xl mb-6 text-[#394547] leading-normal font-light">
                Great summaries for busy people,
                <br className="hidden md:block" />
                individuals who barely have time to read,
                <br className="hidden md:block" />
                and even people who don’t like to read.
              </div>
              <button className="mx-auto md:m-0 btn home__cta--btn">Login</button>
            </div>
            <figure className="w-full flex justify-end hidden
            md:flex">
              <Image src={landingimg} alt="logo" className="h-full w-full max-w-100" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
