import Skeleton from "./Skeleton";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";

export default function BookCardSkeleton() {
  return (
    <>
      <div className="bookCardSkeleton relative rounded-sm max-w-[200px] w-full px-3 pt-8 pb-3 snap-start">
        <Skeleton
          height={172}
          width={172}
          borderRadius={8}
          className="mb-2 "
        />
      
      <div className="title__skeleton">
        <Skeleton width={172} height={20} borderRadius={4} className="mb-2"/>
      </div>
      <div className="author__skeleton mb-2">
        <Skeleton width={172} height={20} borderRadius={4} className="mb-2" />
      </div>
      <div className="subtitle__skeleton mb-2">
        <Skeleton width={172} height={40} borderRadius={4} className="mb-2" />
      </div>
      <div className="details__wrapper--skeleton flex ">
        <div className="details__skeleton flex gap-1">
          <div className="recommended__book--details-icon flex">
            <CiClock2 className="w-4 h-4" />
          </div>
          <div className="recommended__book--details-text ">
            <Skeleton width={30} height={18} borderRadius={2} className=""/>
          </div>
        </div>
        <div className="details__skeleton flex gap-1">
          <div className="recommended__book--details-icon flex">
            <CiStar className="w-4 h-4" />
          </div>
          <div className="recommended__book--details-text ">
            <Skeleton width={30} height={18} borderRadius={2} className=""/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
