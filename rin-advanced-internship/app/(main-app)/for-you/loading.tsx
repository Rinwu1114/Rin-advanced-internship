import BookCardSkeleton from "../components/LoadingComponents/BookCardSkeleton";
import SelectedSkeleton from "../components/LoadingComponents/SelectedSkeleton";

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-[200px_minmax(0,1fr)]">
        <div>
          <div className="row">
            <div className="container">
              <div className="for-you__wrapper flex flex-col">
                <div className="selected flex flex-col">
                  <div
                    className="for-you__title text-2xl font-bold text-[#032b41] mb-4
                  min-w-[400px]"
                  >
                    Selected just for you{" "}
                  </div>
                  <SelectedSkeleton />
                </div>

                <div className="flex flex-col">
                  <div className="text flex-col min-w-[400px]">
                    <div className="for-you__title font-bold text-[#032b41] mb-4 text-[22px]">
                      Recommended For You
                    </div>
                    <div className="for-you__sub-title font-light text-[#394547] mb-4">
                      We think you'll like these
                    </div>
                  </div>
                  <div className="loading__content flex gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <BookCardSkeleton key={i} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text flex-col min-w-[400px]">
                    <div className="for-you__title font-bold text-[#032b41] mb-4 text-[22px]">
                      Suggested Books
                    </div>
                    <div className="for-you__sub-title font-light text-[#394547] mb-4">
                      Browse those books
                    </div>
                  </div>
                  <div className="loading__content flex gap-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <BookCardSkeleton key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
