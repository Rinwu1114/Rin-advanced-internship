import LandingComponent from "./components/Landing";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Login from "./components/Login";

export default function Landing() {
  return (
    <>
      <Login />
      <LandingComponent />
      <Features />
      <Stats />
      <Reviews />
      <Numbers />
    </>
  );
}
