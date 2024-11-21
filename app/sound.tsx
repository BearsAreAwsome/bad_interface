'use client'
import { useEffect, useRef} from "react"

export const useSound = (audioSource: string | undefined) => {
    const soundRef = useRef<HTMLAudioElement>();
    useEffect(() => {
        soundRef.current = new Audio(audioSource)
        soundRef.current.loop = true;
    }, [])
    const play = () => {
        if(soundRef.current != null) {
            soundRef.current.play();
        }
    }
    return {play};
}
