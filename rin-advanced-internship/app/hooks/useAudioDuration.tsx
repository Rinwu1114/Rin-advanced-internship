import { useEffect, useState, useRef } from "react";

export default function useAudioDuration(audioUrl: string): number{
    
    const [ totalDuration, setTotalDuration ] = useState<number>(0);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio()
        audio.preload = 'metadata'
        audio.src = audioUrl

        audioRef.current = audio;

        const handleLoadedMetaData = () => {
            setTotalDuration(audio.duration)
        }

        const handleError = () => {
            console.error('Failed to load audio', audioUrl)
        }

        audio.addEventListener('loadedmetadata', handleLoadedMetaData)
        audio.addEventListener('error', handleError)

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetaData)
                audioRef.current.removeEventListener('error', handleError)
                audioRef.current.src = ''
            }
        }
    }, [audioUrl])


    return totalDuration
}