import BookInfoSkeleton from "@/app/(main-app)/components/LoadingComponents/BookInfoSkeleton";

export default function Loading() {
  return (
    <>
      <div className="row">
        <div className="container">
          <BookInfoSkeleton />
        </div>
      </div>
    </>
  );
}
