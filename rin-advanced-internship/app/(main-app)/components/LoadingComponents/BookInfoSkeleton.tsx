import Skeleton from "./Skeleton";

export default function BookInfoSkeleton() {
  return (
    <div className="book__wrapper flex max-[1000px]:gap-4 gap-8 max-[1000px]:flex-col flex-row gap">
      <div className="book w-full max-[1000px]:order-1">
        <Skeleton width="70%" height={32} borderRadius={2} className="mb-4" />
        <div className="book__author text-[#032b41] mb-4 font-semibold ">
          <Skeleton width="40%" height={32} borderRadius={2} className="" />
        </div>
        <div className="book__sub-title text-[#032b41] mb-4 font-light text-xl">
          <Skeleton width="100%" height={32} borderRadius={2} className="" />
        </div>
        <div className="inner__wrapper py-4 mb-6 border-y border-[#e1e7ea]">
          <div className="inner__details--wrapper flex flex-wrap max-w-[400px] gap-y-3">
            <div className="inner__detail flex items-center w-full mb-4">
              <Skeleton width="45%" height={64} borderRadius={2} className="" />
            </div>
          </div>
          <div className="book__btn--wrapper flex gap-4 mb-4">
            <Skeleton width="50%" height={32} borderRadius={2} className="" />
          </div>
          <Skeleton width="20%" height={33} borderRadius={2} className="mb-4" />
          <div className="book__tags--wrapper flex flex-wrap gap-4 mb-4">
            <Skeleton width="50%" height={64} borderRadius={2} className="" />
          </div>
          <div className="book__description text-[#032b41] mb-4 leading-[1.5]">
            <Skeleton width="80%" height={180} borderRadius={2} className="" />
          </div>
          <div className="book__about--description text-[#032b41] leading-[1.5]">
            <Skeleton width="80%" height={268} borderRadius={2} className="" />
          </div>
        </div>
      </div>
      <div className="book__img max-[1000px]:flex max-[1000px]:justify-center">
        <figure className="img__wrapper min-w-[300px] w-[300px] h-[300px]">
          <Skeleton width={300} height={300} borderRadius={2} className="" />
        </figure>
      </div>
    </div>
  );
}
