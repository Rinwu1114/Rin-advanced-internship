export default function TrackInfo({ playerInfo }: { playerInfo: any }) {
  return (
    <div
      className="audio__track--wrapper md:w-1/3 w-full flex gap-3 items-center
                justify-center"
    >
      <figure className="audio__track--img-mask flex max-w-12">
        <figure className="book__img--wrapper w-12 h-12 mix-w-12">
          <img src={playerInfo.imageLink} alt="" className="book__img" />
        </figure>
      </figure>
      <div
        className="audio__track--details-wrapper text-[#fff] text-sm
                    flex flex-col gap-1 justify-center"
      >
        <div className="track__title">{playerInfo.title}</div>
        <div className="track__author text-[#bac8ce]">{playerInfo.author}</div>
      </div>
    </div>
  );
}
