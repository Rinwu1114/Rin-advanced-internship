import Loading from "./loading";
import { Suspense } from "react";
import nextDynamic from "next/dynamic";
export const dynamic = 'force-dynamic'

const LibraryLoggedIn = nextDynamic(() => import("./components/LibraryLoggedIn"), {
  ssr: true,
});

export default async function MyLibrary() {

  await new Promise((resolve) => setTimeout(resolve , 100))

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
