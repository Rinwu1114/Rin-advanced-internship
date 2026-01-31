import Skeleton from "./Skeleton";

export default function SettingsSkeletion() {
  return (
    <>
      <div
        className="settings__title pb-4 text-left border-b border-[#e1e7ea]
        text-[#032b41] text-3xl font-bold mb-8"
      >
        Settings
      </div>
      <div
        className="setting__content flex flex-col
        items-start gap-2 mb-8 border-b border-[#e1e7ea] pb-6"
      >
        <Skeleton width={160} height={24} borderRadius={2} className="" />
        <Skeleton width={280} height={24} borderRadius={2} className="" />
      </div>
      <div
        className="setting__content flex flex-col
        items-start gap-2 pb-6"
      >
        <Skeleton width={160} height={24} borderRadius={2} className="" />
        <Skeleton width={280} height={24} borderRadius={2} className="" />
      </div>
    </>
  );
}
