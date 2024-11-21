import { useEffect, useRef} from "react"

export const soundHook = (audioSource: string | undefined) => {
    const soundRef = useRef<HTMLAudioElement>();
    useEffect(() => {
        soundRef.current = new Audio(audioSource)
    }, [])
    const play = () => {
        if(soundRef.current != null) {
            soundRef.current.play();
        }
    }
    return {play};
}
