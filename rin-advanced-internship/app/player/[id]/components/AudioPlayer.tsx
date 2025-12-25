'use client';

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { togglePlayPause, stop, updateProgress, setDuration, skipForward  } from "@/app/redux/slices/audioPlayerSlice";
import TrackInfo from "./TrackInfo";
import AudioControls from "./Controls";
import ProgressBar from "./ProgressBar";

export default function AudioPlayer({ playerInfo }: { playerInfo: any }) {
  
    const audioRef = useRef<HTMLAudioElement>(null)
    const dispatch = useDispatch()
    const { isPlaying, currentTime } = useSelector((state: RootState) => state.AudioBookPlayer)
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

    //update progress + total duration + end audio on finish

    useEffect(() => {
      const audio = audioRef.current
        if (!audio) return;
      const handleTimeUpdate = () => {
        dispatch(updateProgress(audio.currentTime))
      }
      const handleMetaData = () => {
        dispatch(setDuration(audio.duration))
      }
      const handleEnded = () => {
        dispatch(stop())
      }
      
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('loadedmetadata', handleMetaData)
      audio.addEventListener('ended', handleEnded)
      
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('loadedmetadata', handleMetaData)
        audio.removeEventListener('ended', handleEnded)
        
      }

      
    },[dispatch])

//skip and rewind

const lastUserSeekTime = useRef(0);


    useEffect(() => {
      if (!audioRef.current) return;

      const diff = Math.abs(audioRef.current.currentTime - currentTime)
      if (diff > 0.5){
        audioRef.current.currentTime = currentTime
      }
  }, [currentTime])


    return (
    <div
      className="audio__wrapper w-full h-20 mt-auto flex items-center
        justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-80"
    >
      <audio preload="auto" ref={audioRef} src={playerInfo.audioLink}></audio>
      <TrackInfo playerInfo={playerInfo} />
      <AudioControls />
      <ProgressBar playerInfo = {playerInfo} />
    </div>
  );
}
