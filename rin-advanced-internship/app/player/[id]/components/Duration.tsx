'use client'


import { RootState } from "@/app/redux/store"
import { formatTime } from "./FormatTime"
import { useSelector } from "react-redux"

export default function DisplayDuration() {
    const { duration } = useSelector((state: RootState) => state.AudioBookPlayer)

    return <span>{formatTime(duration)}</span>
}