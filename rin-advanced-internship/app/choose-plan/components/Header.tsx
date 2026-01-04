import pricing from "@/public/assets/pricing-top.png";
import Image from "next/image";

export default function Header() {
  return (
    <div
      className="header__wrapper relative text-center w-full
        pt-12 mb-6
        before:absolute before:top-0 before:left-0 
        before:z-[-1] before:bg-[#032b41] before:w-full before:h-full
        before:rounded-b-[256px]"
    >
      <div className="header max-w-[1000px] mx-auto px-6 text-white">
        <div className="title mb-10 text-5xl font-bold">
          Get unlimited access to many amazing books to read
        </div>
        <div className="sub-title text-xl mb-8">
          Turn ordinary moments into amazing learning opportunities
        </div>
        <figure
          className="img__mask flex justify-center
                max-w-[340px] mx-auto overflow-hidden rounded-t-[180px]"
        >
          <Image src={pricing} alt="pricing img" />
        </figure>
      </div>
    </div>
  );
}
