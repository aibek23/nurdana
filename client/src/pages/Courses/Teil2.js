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
import Title2 from "../../img/tile2.png"
const audioTracks = [];
const defaultTrackIndex = 0;
const Teil2 = () => {
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
            <img className="mt-5" src={Title2} style={{ width: 500 }} alt="" />
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
            <h1>Die Telefonnumer- номер телефона</h1>
            <p>Vorname-имя <br /> Familienname- фамилия
            </p>
            <table className="table_a1">

                <tbody>
                    <tr>
                        <th>Zahl</th>
                        <th>Aussprache</th>
                        <th>Deutsch</th>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>драйцэйн</td>
                        <td>dreizehn</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>фирцэйн</td>
                        <td>vierzehn</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>фюнфцэйн</td>
                        <td>fünfzehn</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>зэхьцэйн</td>
                        <td>sechzehn</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>зипцэйн</td>
                        <td>siebzehn</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>ахтцэйн</td>
                        <td>achtzehn</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>нойнцэйн</td>
                        <td>neunzehn</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>цванцихь</td>
                        <td>zwanzig</td>
                    </tr>
                    <tr>
                        <td>21</td>
                        <td>айн-унт-цванцихь</td>
                        <td>einundzwanzig</td>
                    </tr>
                    <tr>
                        <td>22</td>
                        <td>цвай-унт-цванцихь</td>
                        <td>zweiundzwanzig</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>драйсихь</td>
                        <td>dreißig</td>
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>фирцихь</td>
                        <td>vierzig</td>
                    </tr>
                    <tr>
                        <td>50</td>
                        <td>фюнфцихь</td>
                        <td>fünfzig</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>зэхьцихь</td>
                        <td>sechzig</td>
                    </tr>
                    <tr>
                        <td>70</td>
                        <td>зипцихь</td>
                        <td>siebzig</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>ахтцихь</td>
                        <td>achtzig</td>
                    </tr>
                    <tr>
                        <td>90</td>
                        <td>нойнцихь</td>
                        <td>neunzig</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>хундэрт</td>
                        <td>(ein)hundert</td>
                    </tr>
                    <tr>
                        <td>101</td>
                        <td>хундэрт-айнс</td>
                        <td>hunderteins</td>
                    </tr>
                    <tr>
                        <td>110</td>
                        <td>хундэрт-цйэн</td>
                        <td>hundertzehn</td>
                    </tr>
                    <tr>
                        <td>200</td>
                        <td>цвай-хундэрт</td>
                        <td>zweihundert</td>
                    </tr>
                    <tr>
                        <td>258</td>
                        <td>цвай-хундэрт-ахт-унт-фюнфцихь</td>
                        <td>zweihundertachtundfünfzig</td>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>драй-хундэрт</td>
                        <td>dreihundert</td>
                    </tr>
                    <tr>
                        <td>400</td>
                        <td>фир-хундэрт</td>
                        <td>vierhundert</td>
                    </tr>
                    <tr>
                        <td>500</td>
                        <td>фюнф-хундэрт</td>
                        <td>fünfhundert</td>
                    </tr>
                    <tr>
                        <td>600</td>
                        <td>зэкс-хундэрт</td>
                        <td>sechshundert</td>
                    </tr>
                    <tr>
                        <td>700</td>
                        <td>зибэн-хундэрт</td>
                        <td>siebenhundert</td>
                    </tr>
                    <tr>
                        <td>800</td>
                        <td>ахт-хундэрт</td>
                        <td>achthundert</td>
                    </tr>
                    <tr>
                        <td>900</td>
                        <td>нойн-хундэрт</td>
                        <td>neunhundert</td>
                    </tr>
                    <tr>
                        <td>1 000</td>
                        <td>таузэнт</td>
                        <td>tausend</td>
                    </tr>
                    <tr>
                        <td>1 100</td>
                        <td>таузэнт-айн-хундэрт</td>
                        <td>tausendeinhundert</td>
                    </tr>
                    <tr>
                        <td>2 000</td>
                        <td>цвайтаузэнт</td>
                        <td>zweitausend</td>
                    </tr>
                    <tr>
                        <td>10 000</td>
                        <td>цэйнтаузэнт</td>
                        <td>zehntausend</td>
                    </tr>
                    <tr>
                        <td>100 000</td>
                        <td>хундэрттаузэнт</td>
                        <td>hunderttausend</td>
                    </tr>
                    <tr>
                        <td>1 000 000</td>
                        <td>айнэ мильон</td>
                        <td>eine Million</td>
                    </tr>
                    <tr>
                        <td>10 000 000</td>
                        <td>цэйн мильонен</td>
                        <td>zehn Millionen</td>
                    </tr>
                </tbody>
            </table>
            <h2>Ja\Nein-Fragen</h2>
            <p>Ja/Nein-Fragen называются так, <br/>потому что ответить на них можно одним словом ja, nein.
            </p>
            <table className="table_a1">
  <thead>
    <tr>
      <th>Fragen</th>
      <th>Deutsch</th>
      <th>Russisch</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ist das Ihre Handynummer?</td>
      <td>Это ваш номер телефона?</td>
      <td>Ja, meine Nummer ist +996 700 700 555</td>
    </tr>
    <tr>
      <td>Ist das dein E-Mail-Adresse?</td>
      <td>Это твой эл.адрес?</td>
      <td>Ja, das meine E-Mail-Adresse</td>
    </tr>
    <tr>
      <td>Hast du Skype?</td>
      <td>У тебя есть скайп?</td>
      <td>Nein, ich habe kein Skype</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default Teil2;