export default function GlobalAppLoading() {
  return (
    <div className="w-full h-screen flex flex-col p-6 animate-pulse">
      <div className="h-10 w-48 bg-gray-200 rounded-md mb-8" />
      <div className="space-y-4">
        <div className="h-64 w-full bg-gray-100 rounded-xl" />
        <div className="grid grid-cols-3 gap-4">
          <div className="h-40 bg-gray-100 rounded-lg" />
          <div className="h-40 bg-gray-100 rounded-lg" />
          <div className="h-40 bg-gray-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
