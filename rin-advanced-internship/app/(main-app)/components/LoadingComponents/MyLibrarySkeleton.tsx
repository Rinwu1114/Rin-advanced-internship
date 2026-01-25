import Skeleton from "./Skeleton";
import BookCardSkeleton from "./BookCardSkeleton";

export default function MyLibrarySkeleton() {
  return (
    <>
      <div className="title font-bold text-[#032b41] mb-4 text-[22px]">
        Saved Books
      </div>
      <Skeleton width={100} height={20} borderRadius={2} className="mb-6" />
      <div className="loading__content flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
      <div className="title font-bold text-[#032b41] mb-4 pt-4 text-[22px]">
        Finished Books
      </div>
      <Skeleton width={100} height={20} borderRadius={2} className="mb-6" />
      <div className="loading__content flex">
        {Array.from({ length: 6 }).map((_, i) => (
          <BookCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
