import Image from "next/image";
import landingimg from "../../../public/assets/landing.png"

export default function LandingComponent() {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="flex">
            <div className="w-max">
              <div className="text-[#032b41] font-bold text-4xl mb-6  ">
                Gain more knowledge <br className="remove--tablet" />
                in less time
              </div>
              <div className="text-xl mb-6 text-[#394547] leading-normal font-light">
                Great summaries for busy people,
                <br className="remove--tablet" />
                individuals who barely have time to read,
                <br className="remove--tablet" />
                and even people who don’t like to read.
              </div>
              <button className="btn home__cta--btn">Login</button>
            </div>
            <figure className="w-max flex justify-end">
              <Image src={landingimg} alt="logo" className="h-full w-full max-w-100" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
