
export default function Summary( {playerInfo}: {playerInfo: any} ) {
    return(
        <>
        <div className="summary p-6 max-w-[800px] mx-auto">
            <div className="summary__title text-[#032b41] text-2xl mb-8 pb-4 leading-[1.5] border-b border-1px border-[#e1e7ea] font-bold">{playerInfo.title}</div>
            <div className="summary__text whitespace-pre-line leading-[1.4] text-[#032b41]">{playerInfo.summary}</div>
        </div>
        </>
    )
}