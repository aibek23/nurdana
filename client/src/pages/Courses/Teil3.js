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
            <div className="row">

                <div className="col-6">  <ul className="Dialog_1 mt-4">
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
                </ul></div>
                <div className="col-6">
                    <ul className="Dialog_1 mt-4">

                        <li>das Buch-книга</li>
                        <li>Der Bleistift - карандаш (m)</li>
                        <li>Der Radiergummi-стирательная резинка(m)</li>
                        <li>Der Spitzer - точилка (m)</li>
                        <li>Das Heft - тетрадь (n)</li>
                        <li>Das Handy - телефон (n)</li>
                        <li>Das Deutschbuch - книга на немецком (n)</li>
                        <li>Das Wörterbuch - словарь (n)</li>
                        <li>Die Maus - мышь (f)</li>
                        <li>Die Schere - ножницы (f)</li>
                    </ul></div>
            </div>


            <ul className="Dialog_1 mt-4">
                <li>ich - mein</li>
                <li>du - dein</li>
                <li>er - sein</li>
                <li>sie - ihr</li>
                <li>es - sein</li>
                <li>wir - unser</li>
                <li>ihr - euer</li>
                <li>Sie - Ihr</li>
                <li>sie - ihr</li>
            </ul>
            <table className="table_a1">
                <thead >
                    <tr>
                        <th>SINGULAR</th>
                        <th>Bestimmter Artikel</th>
                        <th>Unbestimmter Artikel</th>
                        <th>Possessiveartikel</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>der</td>
                        <td>der Kuli</td>
                        <td>ein Kuli</td>
                        <td>mein/dein Kuli</td>
                    </tr>
                    <tr>
                        <td>das</td>
                        <td>das Handy</td>
                        <td>ein Handy</td>
                        <td>mein/dein Handy</td>
                    </tr>
                    <tr>
                        <td>die</td>
                        <td>die Brille</td>
                        <td>eine Brille</td>
                        <td>meine/deine Brille</td>
                    </tr>
                </tbody>
            </table>

            <div class="container d-flex flex-wrap " style={{"flexDirection":"column"}}>
                <h1>Отрицания в немецком языке</h1>
                <p>Есть два типа отрицаний:</p>
                <ul style={{"textAlign":"start"}}>
                    <li>kein (для отрицания имён существительных);</li>
                    <li>nicht (для отрицания всех остальных частей речи).</li>
                </ul>
                <h2>Отрицание с помощью "kein"</h2>
                <p>"Kein" ведет себя как неопределенный артикль и склоняется в зависимости от рода, числа и падежа:</p>
                <table className="table_a1">
                    <thead>
                        <tr>
                            <th>Исходное выражение</th>
                            <th>Отрицание</th>
                            <th>Перевод</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Das ist ein Buch</td>
                            <td>Das ist kein Buch</td>
                            <td>Это книга / Это не книга</td>
                        </tr>
                        <tr>
                            <td>Ich sehe eine Katze</td>
                            <td>Ich sehe keine Katze</td>
                            <td>Я вижу собаку / Я не вижу никакую собаку</td>
                        </tr>
                    </tbody>
                </table>
                <h2>Отрицание с помощью "nicht"</h2>
                <p style={{"textAlign":"start"}}>Чтобы отрицать существительные с определённым артиклем, или притяжательным местоимением, или другие части речи, или всё предложение в целом, нужно использовать частичку "nicht".</p>
                <p style={{"textAlign":"start"}}>И главный наш вопрос: где она должна стоять? Как и в русском, она может находится на разных позициях в зависимости от того, что мы отрицаем и на чем мы хотим сделать акцент. Но для отрицания всего предложения у "nicht" есть четкая позиция:</p>
                <ol style={{"textAlign":"start"}}>
                    <li>Перед прилагательным или наречием: <code>Das ist nicht lustig</code> — это не весело.</li>
                    <li>Перед предлогом:
                    <code> Er kommt nicht aus Deutschland</code> — он не из Германии.</li>
                    <li>Перед вторым глаголом:
                    <code>Ich kann heute nicht kommen </code>— я сегодня не могу прийти.</li>
                    <li>Перед определенным артиклем или притяжательным местоимением:
                    <code>Ich sehe nicht den Hund </code>— я не вижу собаку (конкретную собаку).</li>
                    <li> В конце предложения, если нету ничего из вышеуказанного:
                    <code>Ich arbeite heute Nachmittag nicht</code> — я не работаю сегодня во второй половине дня </li>
                </ol>
            </div>
        </div>
    )
}

export default Teil3;