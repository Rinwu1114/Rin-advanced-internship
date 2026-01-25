import MyLibrarySkeleton from "../components/LoadingComponents/MyLibrarySkeleton";

export default function Loading() {
  return (
    <>
      <div className="row">
        <div className="container">
          <MyLibrarySkeleton />
        </div>
      </div>
    </>
  );
}
