import Loading from "./loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Selected = dynamic(() => import("./components/Selected"), { ssr: true });
const Recommended = dynamic(() => import("./components/Recommended"), { ssr: true });
const Suggested = dynamic(() => import("./components/Suggested"), { ssr: true });

export default async function ForYou() {
  return (
    <div className="row">
      <div className="container">
        <div className="for-you__wrapper">
          <Suspense fallback={<Loading />}>
            <Selected />
            <Recommended />
            <Suggested />
          </Suspense>
        </div>
      </div>
    </div>
  );
}