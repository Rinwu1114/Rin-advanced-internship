import Image from "next/image";
import logo from "../../public/assets/logo.png";

export default function Nav() {
  return (
    <nav className="h-20">
      <div className="flex justify-between items-center h-full max-w-[1070px] w-full mx-auto px-6">
        <figure className="max-w-50">
          <Image src={logo} alt="logo" className="h-full w-full" />
        </figure>
        <ul className="flex gap-6">
          <li className="text-[#032b41] cursor-pointer transition-colors duration-100 hover:text-[#2bd97c] --login">
            Login
          </li>
          <li className="text-[#032b41] cursor-not-allowed transition-colors duration-100 hover:text-[#2bd97c]
          min-[576px]:block hidden --mobile">
            About
          </li>
          <li className="text-[#032b41] cursor-not-allowed transition-colors duration-100 hover:text-[#2bd97c]
          min-[576px]:block hidden --mobile">
            Contact
          </li>
          <li className="text-[#032b41] cursor-not-allowed transition-colors duration-100 hover:text-[#2bd97c]
          min-[576px]:block hidden --mobile">
            Help
          </li>
        </ul>
      </div>
    </nav>
  );
}
