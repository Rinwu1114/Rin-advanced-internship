import SettingsSkeleton from "../components/LoadingComponents/SettingsSkeleton";

export default function Loading() {
  return (
    <>
      <div className="row">
        <div className="container">
          <SettingsSkeleton />
        </div>
      </div>
    </>
  );
}
