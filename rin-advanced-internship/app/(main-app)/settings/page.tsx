import nextDynamic from "next/dynamic";
export const dynamic = "force-dynamic";
import Loading from "./loading";
import { Suspense } from "react";

const LoggedInSettings = nextDynamic(
  () => import("./components/LoggedinSettings"),
  {
    ssr: true,
  }
);

export default async function SettingsPage() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return (
    <div className="row">
      <div className="container">
        <Suspense fallback={<Loading />}>
          <LoggedInSettings />
        </Suspense>
      </div>
    </div>
  );
}
