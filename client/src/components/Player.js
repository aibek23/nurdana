import React from "react";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
// import au1 from "../audeo/1.2.mp3"
// import au2 from "../audeo/1.3.mp3"
// import au4 from "../audeo/1.4.mp3"
// import au5 from "../audeo/1.5.mp3"
// import au6 from "../audeo/1.6.mp3"
// import au7 from "../audeo/1.7.mp3"
// import au9 from "../audeo/1.7.mp3"
import useSound from "use-sound";
import aude1 from "../audeo/willkommen.m4a";
import aude2 from "../audeo/wie_geht_es_dir.m4a"
import aude3 from "../audeo/hissen.m4a"
import audewohnen from "../audeo/wonen.m4a"
import audekomen from "../audeo/komen.m4a"
import numers from "../audeo/numers.mp4"
// import aude3 from "../../audeo/ich.m4a"
import aude4 from "../audeo/sein.m4a"

const audioTracks = [aude1, aude2, aude3,aude4,audewohnen,audekomen,numers];
export const Player = (props) => {
    if (Math.trunc(props.props)<3&&Math.trunc(props.props)>=2) {
        let num = props.props
        let numString = num.toString(); // "3.14159"
        let decimalPart = numString.split(".")[1]; // "14159"   
        console.log(parseInt(decimalPart));
    }

    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(props.props);
    const [play, { pause, duration, sound }] = useSound(audioTracks[trackIndex]);
    const [currTime, setCurrTime] = useState({
        min: "0",
        sec: "00",
    });
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound && isPlaying) {
                setSeconds(sound.seek());
                const min = Math.floor(sound.seek() / 60);
                const sec = Math.floor(sound.seek() % 60) > 9 ? Math.floor(sound.seek() % 60) : "0" + Math.floor(sound.seek() % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound, isPlaying]);

    const playingButton = (e) => {

        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };
    const useTrackButton = () => {
        pause();
        setIsPlaying(false);
        setCurrTime({ min: "0", sec: "00", })
        const nextIndex = (trackIndex + 1) % audioTracks.length;
        setTrackIndex(nextIndex);
        const [playNext] = useSound(audioTracks[nextIndex]);
        playNext();
    };

    const usePrevTrackButton = () => {
        pause();
        setIsPlaying(false);
        setCurrTime({ min: "0", sec: "00", })
        const prevIndex = (trackIndex + audioTracks.length - 1) % audioTracks.length;
        setTrackIndex(prevIndex);
        const [playPrev] = useSound(audioTracks[prevIndex]);
        playPrev();
    };
    return (
        <>

<div className="rowTime">
                <div className="componentTime">
                    <div className="containerPleer">
                        {/* <div className="playButton " onClick={usePrevTrackButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <BiSkipPrevious />
                        </IconContext.Provider>
                    </div> */}
                        {!isPlaying ? (
                            <div className="playButton" onClick={() => {  playingButton() }}>
                                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                    <AiFillPlayCircle />
                                </IconContext.Provider>
                            </div>
                        ) : (
                            <div className="playButton" onClick={() => {  playingButton() }}>
                                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                    <AiFillPauseCircle />
                                </IconContext.Provider>
                            </div>
                        )}
                        {/* <div className="playButton" onClick={useTrackButton}>
                        <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                            <BiSkipNext />
                        </IconContext.Provider>
                    </div> */}
                        <span>
                            {currTime.min}:{currTime.sec}
                        </span>
                        <input
                            type="range"
                            min="0"
                            max={duration / 1000}
                            default="0"
                            value={seconds}
                            className="timeline"
                            onChange={(e) => {
                                sound.seek([e.target.value]);
                            }}
                        />
                        <span>
                            {Math.floor((duration / 1000) / 60)} : {Math.floor((duration / 1000) % 60)}
                        </span>
                    </div>
                </div>


            </div>

        </>
    )
} 
