import LandingComponent from "./components/Landing";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import PopUp from "./components/PopUp";

export default function Landing() {
  return (
    <>
      <PopUp />
      <LandingComponent />
      <Features />
      <Stats />
      <Reviews />
      <Numbers />
    </>
  );
}
