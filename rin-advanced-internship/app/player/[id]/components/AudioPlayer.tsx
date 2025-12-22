'use client';

import { useEffect, useRef } from "react";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { togglePlayPause, stop } from "@/app/redux/slices/audioPlayerSlice";
import TrackInfo from "./TrackInfo";
import AudioControls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer({ playerInfo }: { playerInfo: any }) {
  
    const audioRef = useRef<HTMLAudioElement>(null)
    const dispatch = useDispatch()
    const { isPlaying } = useSelector((state: RootState) => state.AudioBookPlayer)
  //play and pause
    useEffect(() => {
        if (!audioRef.current) return;

        if(isPlaying) {
            audioRef.current.play().catch(error => {
                console.error(`Play failed:`, error);
                dispatch(togglePlayPause())
            })
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, dispatch])

    // end audio
    useEffect(() => {
        dispatch(stop())
    })

    //update progress

    useEffect(() => {
      const audio = audioRef.current
        if (!audio) return;
        //test
        

    })

    return (
    <div
      className="audio__wrapper w-full h-20 mt-auto flex items-center
        justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-80"
    >
      <audio src={playerInfo.audioLink}></audio>
      <TrackInfo playerInfo={playerInfo} />
      <AudioControls playerInfo={playerInfo} />
      <ProgressBar playerInfo = {playerInfo} />
    </div>
  );
}
