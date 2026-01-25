"use client";

import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  togglePlayPause,
  stop,
  updateProgress,
  setDuration,
} from "@/app/redux/slices/audioPlayerSlice";
import TrackInfo from "./TrackInfo";
import AudioControls from "./Controls";
import ProgressBar from "./ProgressBar";


export default function AudioPlayer({ playerInfo }: { playerInfo: any }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const { isPlaying, currentTime } = useSelector(
    (state: RootState) => state.AudioBookPlayer
  );

  //play and pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        if (
          error.name !== "AbortError" &&
          !error.message.includes("interrupted")
        ) {
          console.error("Play failed:", error);
        }
        dispatch(togglePlayPause());
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, dispatch]);

  //update progress + total duration + end audio on finish
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleTimeUpdate = () => {
      dispatch(updateProgress(audio.currentTime));
    };
    const handleMetaData = () => {
      dispatch(setDuration(audio.duration));
    };
    const handleEnded = () => {
      dispatch(stop()), dispatch(updateProgress(0));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleMetaData);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleMetaData);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [dispatch]);

  //skip and rewind

  useEffect(() => {
    if (!audioRef.current) return;

    const diff = Math.abs(audioRef.current.currentTime - currentTime);
    if (diff > 0.5) {
      audioRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  //restart when new book

  useEffect(() => {
    dispatch(stop());
    dispatch(updateProgress(0));

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [playerInfo.audioLink, dispatch]);

  return (
    <div
      className="audio__wrapper w-full h-20 mt-auto flex items-center
        justify-between bg-[#042330] px-10 fixed bottom-0 left-0 z-80"
    >
      <audio ref={audioRef} src={playerInfo.audioLink} preload="metadata">
        {" "}
      </audio>
      <TrackInfo playerInfo={playerInfo} />
      <AudioControls />
      <ProgressBar playerInfo={playerInfo}/>
    </div>
  );
}
