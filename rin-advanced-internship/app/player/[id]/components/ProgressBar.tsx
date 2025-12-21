
export default function ProgressBar({ playerInfo }: { playerInfo: any }){
 return(
    <div className="audio__progress--wrapper w-1/3 flex items-center gap-4">
        <div className="audio__time text-[#fff] text-sm">insert start time</div>
        <input type="range" className="audio__progress--bar rounded-lg max-w-[300px]
        w-full cursor-pointer outline-none h-1" />
        <div className="audio__time text-[#fff] text-sm">insert end time</div>
      </div>
 )
}