import Loading from "./loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const LibraryLoggedIn = dynamic(() => import("./components/LibraryLoggedIn"), {
  ssr: true,
});

export default async function MyLibrary() {
  return (
    <>
      <div className="row">
        <div className="container">
          <Suspense fallback={<Loading />}>
            <LibraryLoggedIn />
          </Suspense>
        </div>
      </div>
    </>
  );
}
