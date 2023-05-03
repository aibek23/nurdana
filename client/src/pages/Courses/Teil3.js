import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; //для работы со звуком
import aude1 from "../../audeo/willkommen.m4a";
import aude2 from "../../audeo/wie_geht_es_dir.m4a"
import aude3 from "../../audeo/hissen.m4a"
// import aude3 from "../../audeo/ich.m4a"
import aude4 from "../../audeo/sein.m4a"


import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
import Spitzer from "../../img/125320.png"
import Student from "../../img/33947.png"
import Lektion from "../../img/124952.png"
const audioTracks = [];
const defaultTrackIndex = 0;
const Teil3 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(defaultTrackIndex);
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

    const playingButton = () => {
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

        <div className="container text-center ">
            <img className="mt-5" src={Lektion} style={{ maxWidth: "70vw" }} alt="" />
            <img className="mt-5" src={Spitzer} style={{ maxWidth: "70vw" }} alt="" />
            <img className="mt-5" src={Student} style={{ maxWidth: "70vw" }} alt="" />
            <div className="rowTime">
                <div className="componentTime">
                    <div className="containerPleer">
                        <div className="playButton " onClick={usePrevTrackButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <BiSkipPrevious />
                            </IconContext.Provider>
                        </div>
                        {!isPlaying ? (
                            <div className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                    <AiFillPlayCircle />
                                </IconContext.Provider>
                            </div>
                        ) : (
                            <div className="playButton" onClick={playingButton}>
                                <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                    <AiFillPauseCircle />
                                </IconContext.Provider>
                            </div>
                        )}
                        <div className="playButton" onClick={useTrackButton}>
                            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                                <BiSkipNext />
                            </IconContext.Provider>
                        </div>
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
            {/* <h1>Немецкие фразы </h1> */}
            <ul className="Dialog_1 mt-4">
                <li>das Fenster-окно</li>
                <li>der Tisch-стол</li>
                <li>das Poster-постер</li>
                <li>die Tafel-доска</li>
                <li>der Stuhl –стул</li>
                <li>die Tasche-сумка</li>
                <li>die Lampe-лампа</li>
                <li>der Laptoр-ноутбук</li>
                <li>das Tablet-планшет</li>
                <li>die Brille-очки</li>
                <li>der Kuli-ручка</li>
                <li>das Buch-книга</li>
            </ul>


        </div>
    )
}

export default Teil3;