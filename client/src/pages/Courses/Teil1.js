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
import Herzlich from "../../img/A1_1.png"
import Teil2 from "../../img/tile2.png"
const audioTracks = [aude1, aude2,aude3,aude4];
const defaultTrackIndex = 0;
const Teil1 = () => {
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
                const sec = Math.floor(sound.seek() % 60)>9?Math.floor(sound.seek() % 60):"0"+Math.floor(sound.seek() % 60);
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
        setCurrTime({min: "0",sec: "00",})
        const nextIndex = (trackIndex + 1) % audioTracks.length;
        setTrackIndex(nextIndex);
        const [playNext] = useSound(audioTracks[nextIndex]);
        playNext();
    };

    const usePrevTrackButton = () => {
        pause();
        setIsPlaying(false);
        setCurrTime({min: "0",sec: "00",})
        const prevIndex = (trackIndex + audioTracks.length - 1) % audioTracks.length;
        setTrackIndex(prevIndex);
        const [playPrev] = useSound(audioTracks[prevIndex]);
        playPrev();
    };
    return (

        <div className="container text-center ">
            <img className="mt-5" src={Herzlich} style={{ width: 500 }} alt="" />
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

            <h1>Немецкие фразы приветствия и прощания</h1>
            <table className="table_a1" >
                <tr>
                    <th>Фраза</th>
                    <th>Перевод</th>
                </tr>
                <tr>
                    <td>Herzlich Wilkommen</td>
                    <td>Добро пожаловать</td>
                </tr>
                <tr>
                    <td>Die Begrüßung</td>
                    <td>приветствие</td>
                </tr>
                <tr>
                    <td>Guten Morgen</td>
                    <td>Доброе утро. Эту фразу вы можете сказать, как правило, до полудня.</td>
                </tr>
                <tr>
                    <td>Guten Tag</td>
                    <td>Добрый день. Данная фраза употребляется после полудня до 6 часов вечера.</td>
                </tr>
                <tr>
                    <td>Guten Abend</td>
                    <td>Добрый вечер. Это приветствие используется после 6 вечера.</td>
                </tr>
                <tr>
                    <td>Hallo</td>
                    <td>Привет</td>
                </tr>
                <tr>
                    <td>Wie geht es Ihnen?</td>
                    <td>Как дела (у вас)? — не забывайте, что данный вопрос является формальным.</td>
                </tr>
                <tr>
                    <td>Geht es Ihnen gut?</td>
                    <td>У вас все в порядке?</td>
                </tr>
                <tr>
                    <td>Gut, danke</td>
                    <td>Все хорошо, спасибо.</td>
                </tr>
                <tr>
                    <td>Es geht mir sehr gut</td>
                    <td>У меня все хорошо.</td>
                </tr>
                <tr>
                    <td>Ziemlich gut</td>
                    <td>Достаточно хорошо.</td>
                </tr>
                <tr>
                    <td>Und Ihnen?</td>
                    <td>А у вас? Все эти фразы очень формальны и используются в ситуациях делового общения.</td>
                </tr>
            </table>
            <h1>При неформальной ситуации общения используйте аналоги приведенных фраз, а именно:</h1>
            <table className="table_a1">
                <tr>
                    <th>Фраза</th>
                    <th>Перевод</th>
                </tr>
                <tr>
                    <td> Wie geht es dir?</td>
                    <td>Как дела (у тебя)?</td>
                </tr>
                <tr>
                    <td>Es geht mir gut </td>
                    <td>У меня все хорошо</td>
                </tr>
                <tr>
                    <td>Super!</td>
                    <td>Отлично!</td>
                </tr>
                <tr>
                    <td>Nicht schlecht</td>
                    <td>Неплохо.</td>
                </tr>
                <tr>
                    <td>Und dir?</td>
                    <td>А у тебя?</td>
                </tr>
                <tr>
                    <td>Der Abschied</td>
                    <td>Прощание</td>
                </tr>
                <tr>
                    <td>Auf Wiedersehen!</td>
                    <td>До свидания!</td>
                </tr>
                <tr>
                    <td>Tschüss!</td>
                    <td>Пока!  — Неформальная фраза прощания.</td>
                </tr>
                <tr>
                    <td>Bis morgen!</td>
                    <td>До завтра!</td>
                </tr>
                <tr>
                    <td>Bis bald!</td>
                    <td>Пока! До скорой встречи!</td>
                </tr>
            </table>
            <h1>German Verbs</h1>
            <table className="table_a1">
                <tr>
                    <th>Personal Pronoun</th>
                    <th>Verb Conjugation</th>
                </tr>
                <tr>
                    <td>ich (меня)</td>
                    <td>heiße (зовут)</td>
                </tr>
                <tr>
                    <td>du (тебя)</td>
                    <td>heißt (зовут)</td>
                </tr>
                <tr>
                    <td>er/sie/es (его\ее\его)</td>
                    <td>heißt (зовут)</td>
                </tr>
                <tr>
                    <td>wir (мы)</td>
                    <td>heißen (зовем)</td>
                </tr>
                <tr>
                    <td>ihr (их)</td>
                    <td>heißt (зовут)</td>
                </tr>
                <tr>
                    <td>Sie/sie (Вас\их )</td>
                    <td>heißen (зовут)</td>
                </tr>
            </table>
            <h1>Sein - быть, являться</h1>
            <table className="table_a1">
                <thead>
                    <tr>
                        <th>Лицо</th>
                        <th>Глагол</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ich</td>
                        <td>bin</td>
                    </tr>
                    <tr>
                        <td>du</td>
                        <td>bist</td>
                    </tr>
                    <tr>
                        <td>er/sie/es</td>
                        <td>ist</td>
                    </tr>
                    <tr>
                        <td>wir</td>
                        <td>sind</td>
                    </tr>
                    <tr>
                        <td>ihr</td>
                        <td>seid</td>
                    </tr>
                    <tr>
                        <td>Sie/sie</td>
                        <td>sind</td>
                    </tr>
                </tbody>
            </table>
            <h1>W-Fragen Beispiele</h1>
            <p>Вопросы с вопросительным словом. В немецком языке вопросительные слова начинаются с буквы W (wo, wer, was, wie). По этой причине их часто называют W-Fragen. В W-Fragen вопросительное слово всегда стоит на первом месте, а глагол на втором.</p>
            <table className="table_a1">

                <tbody>
                    <tr>
                        <td>Wie heißt du?</td>
                        <td>Меня зовут Антон</td>
                    </tr>
                    <tr>
                        <td>Wer bist du?</td>
                        <td>Я Антон</td>
                    </tr>
                    <tr>
                        <td>Woher kommst du?</td>
                        <td>Я из Бишкек</td>
                    </tr>
                    <tr>
                        <td>Bist du zu Hause?</td>
                        <td> Я дома</td>
                    </tr>
                    <tr>
                        <td>Was ist das?</td>
                        <td>Это книга</td>
                    </tr>
       
                </tbody>
            </table>
        </div>
    )
}

export default Teil1;