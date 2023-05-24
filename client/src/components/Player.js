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

import au27 from "../audeo/salen30.mp3"
import au28 from "../audeo/NeinFragen.mp3"
import au29 from "../audeo/1-42.mp3"
import au30 from "../audeo/1-43.mp3"
import au31 from "../audeo/1-44.mp3"
import au32 from "../audeo/lerne.mp3"

import au33 from "../audeo/1-31.mp3"
import au34 from "../audeo/1-32.mp3"
import au35 from "../audeo/1-33.mp3"
import au36 from "../audeo/1-34.mp3"
import au37 from "../audeo/1-35.mp3"
import au38 from "../audeo/1-38.mp3"
import au39 from "../audeo/1-39.mp3"
import au40 from "../audeo/1-40.mp3"

import au41 from "../audeo/1-41.mp3"

import au42 from "../audeo/1-45.mp3"

import au43 from "../audeo/1-46.mp3"

import au44 from "../audeo/1-59.mp3"

import au45 from "../audeo/1-60.mp3"

import au46 from "../audeo/1-61.mp3"

import au47 from "../audeo/1-62.mp3"

import au48 from "../audeo/1-68.mp3"

import au49 from "../audeo/1-69.mp3"

import au50 from "../audeo/1-70.mp3"

import au51 from "../audeo/1-71.mp3"

import au52 from "../audeo/1-73.mp3" 

import au53 from "../audeo/1-74.mp3"

import au54 from "../audeo/1-83.mp3"

import au55 from "../audeo/1-84.mp3"

import au56 from "../audeo/1-85.mp3"

import au57 from "../audeo/1-87.mp3"

import au58 from "../audeo/1-88.mp3"

import au59 from "../audeo/1-89.mp3"

import au60 from "../audeo/1-90.mp3"

import au61 from "../audeo/1-91.mp3"

import au62 from "../audeo/1-92.mp3"

import au63 from "../audeo/1-93.mp3"

import au64 from "../audeo/1-94.mp3"


//skype.mp3

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
    au26 ,

    au27,
    au28,
    au29,
    au30,
    au31,
    au32,
    au33,
    au34,
    au35,
    au36,
    au37,
    au38,
    au39,
    au40,
    au41,
    au42,
    au43,
    au44,
    au45,
    au46,
    au47,
    au48,
    au49,
    au50,
    au51,
    au52,
    au53,
    au54,
    au55,
    au56,
    au57,
    au58,
    au59,
    au60,
    au61,
    au62,
    au63,
    au64

];
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
