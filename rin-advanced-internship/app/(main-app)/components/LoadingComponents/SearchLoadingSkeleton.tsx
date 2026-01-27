import Skeleton from "./Skeleton";

export default function SearchLoadingSkeleton () {
    return(
        <div className="search__books--wrapper z-25 flex flex-col max-w-110
        w-full max-h-[640px] ml-auto overflow-y-auto p-4 absolute
        top-[104px] right-[24px] bg-[#fff] border border-[#e1e7ea]">
            <Skeleton width="100%" height={120} borderRadius={0} className="mb-2" />
            <Skeleton width="100%" height={120} borderRadius={0} className="mb-2" />
            <Skeleton width="100%" height={120} borderRadius={0} className="mb-2" />
            <Skeleton width="100%" height={120} borderRadius={0} className="mb-2" />
            <Skeleton width="100%" height={120} borderRadius={0} className="mb-2" />
        </div>
    )
}