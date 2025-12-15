
export default function AudioPlayer( {playerInfo}: {playerInfo: any} ) {
    return(
        <div className="audio__wrapper">
            <audio src={playerInfo.audioLink}></audio>
            <div className="audio__track--wrapper">
                <figure className="audio__track--img-mask">
                    <figure className="book__img--wrapper">
                        <img src={playerInfo.imageLink} alt="" className="book__img" />
                    </figure>
                </figure>
                <div className="audio__track--details-wrapper">
                    <div className="track__title">{playerInfo.title}</div>
                    <div className="track__author">{playerInfo.author}</div>
                </div>
            </div>
            <div className="audio__controls--wrapper">
                <div className="audio__controls">
                    <button className="controls__btn"></button>
                    <button className="controls__btn--play"></button>
                    <button className="controls__btn"></button>
                </div>
            </div>
            <div className="audio__progress--wrapper">
                <div className="audio__time"></div>
                <input type="range" className="audio__progress--bar" />
                <div className="audio__time"></div>
            </div>
        </div>
    )
}