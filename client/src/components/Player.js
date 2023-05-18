import React from "react";
import { useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
import useSound from "use-sound";
import au1 from "../audeo/1-02.mp3"
import au2 from "../audeo/1-03.mp3"
import au3 from "../audeo/1-04.mp3"
import au4 from "../audeo/1-05.mp3"
import au5 from "../audeo/1-06.mp3"
import au6 from "../audeo/1-07.mp3"
import au7 from "../audeo/1-09.mp3"
import au8 from "../audeo/1-14.mp3"
import au9 from "../audeo/1-15.mp3"
import au10 from "../audeo/1-16.mp3"
import au11 from "../audeo/1-17.mp3"
import au12 from "../audeo/1-21.mp3"
import au13 from "../audeo/1-22.mp3"
import au14 from "../audeo/1-23.mp3"
import au15 from "../audeo/1-24.mp3"
import au16 from "../audeo/1-27.mp3"
import au17 from "../audeo/1-28.mp3"
import au18 from "../audeo/willkommen.m4a";
import au19 from "../audeo/wie_geht_es_dir.m4a"
import au20 from "../audeo/binHabenSein.m4a";
import au21 from "../audeo/wFragen.mp3"
import au22 from "../audeo/land.mp3"
import au23 from "../audeo/wonen.m4a"
import au24 from "../audeo/komen.m4a"
import au25 from "../audeo/1-18.mp3"
import au26 from "../audeo/numers.m4a"

const audioTracks = [
    au1 ,
    au2 ,
    au3 ,
    au4 ,
    au5 ,
    au6 ,
    au7 ,
    au8 ,
    au9 ,
    au10 ,
    au11 ,
    au12 ,
    au13 ,
    au14 ,
    au15 ,
    au16 ,
    au17 ,
    au18 ,
    au19 ,
    au20 ,
    au21 ,
    au22 ,
    au23 ,
    au24 ,
    au25 ,
    au26 ];
export const Player = (props) => {
    // if (Math.trunc(props.props)<3&&Math.trunc(props.props)>=2) {
    //     let num = props.props
    //     let numString = num.toString(); // "3.14159"
    //     let decimalPart = numString.split(".")[1]; // "14159"   
    //     console.log(parseInt(decimalPart));
    // }

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
