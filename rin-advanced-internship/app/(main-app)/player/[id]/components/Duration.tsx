"use client";

import { formatTime } from "./FormatTime";
import useAudioDuration from "@/app/hooks/useAudioDuration";

export default function DisplayDuration({ playerInfo }: { playerInfo: any }) {
  const duration = useAudioDuration(playerInfo.audioLink);
  return <span>{formatTime(duration)}</span>;
}
