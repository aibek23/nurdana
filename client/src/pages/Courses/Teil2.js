import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; //для работы со звуком
// import aude1 from "../../audeo/willkommen.m4a";
// import aude2 from "../../audeo/wie_geht_es_dir.m4a"
// import aude3 from "../../audeo/hissen.m4a"
// import aude4 from "../../audeo/sein.m4a"

import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
// import Herzlich from "../../img/A1_1.png"
import Horen from "../../img/101216.png"
import Fokus from "../../img/103921.png"
import Schreibt from "../../img/104456.png"
import Antvorten from "../../img/120831.png"
import Ergenzin from "../../img/121110.png"
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
            <img className="mt-5" src={Title2} style={{ maxWidth: "75vw" }} alt="" />
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
            <p>Ja/Nein-Fragen называются так, <br />потому что ответить на них можно одним словом ja, nein.
            </p>
            <table className="table_a1">
                <thead>
                    <tr>
                        <th>Deutsch</th>
                        <th>Russisch</th>
                        <th>Deutsch</th>
                        <th>Russisch</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ist das Ihre Handynummer?</td>
                        <td>Это ваш номер телефона?</td>
                        <td>Ja, meine Nummer ist +996 700 700 555</td>
                        <td>Да, мой номер +996 700 700 555</td>
                    </tr>
                    <tr>
                        <td>Ist das deine E-Mail-Adresse?</td>
                        <td>Это твой эл.адрес?</td>
                        <td>Ja, das ist meine E-Mail-Adresse</td>
                        <td>Да, это мой адрес электронной почты</td>
                    </tr>
                    <tr>
                        <td>Hast du Skype?</td>
                        <td>У тебя есть скайп?</td>
                        <td>Nein, ich habe kein Skype</td>
                        <td>Нет, у меня нет Skype</td>
                    </tr>
                </tbody>
            </table>
            <h2>4. Nesrins Freunde</h2>
            <p>Hören Sie die Dialoge. Ordnen Sie die Dialoge den Fotos zu. Lesen Sie die Dialoge laut.</p>
            <img className="mt-5" src={Horen} style={{ width: "100%" }} alt="" />
            <h2>Dialog 1</h2>
            <div>

                <ul className="Dialog_1">
                    <li>- Hallo, wie heißt du?</li>
                    <li>- Pablo.</li>
                    <li>- Woher kommst du?</li>
                    <li>- Aus León.</li>
                    <li>- Sprichst du Portugiesisch?</li>
                    <li>- Nein, ich spreche Spanisch.</li>
                    <li>- Ich bin Spanier!</li>
                    <li>- Ach so.</li>
                    <li>- Und wie heißt du?</li>
                    <li>- Karin.</li>
                </ul>
                <h2>Dialog 2</h2>
                <ul className="Dialog_1">
                    <li>- Das ist Dana.</li>
                    <li>- Hallo, Dana.</li>
                    <li>- Dana, das ist Karin.</li>
                    <li>- Hallo, Karin. Kommst du aus Deutschland?</li>
                    <li>- Ja, ich bin Deutsche. Und du?</li>
                    <li>- Ich komme aus Polen.</li>
                    <li>- Dzien dobry.</li>
                    <li>- Toll, du sprichst Polnisch!</li>
                    <li>- Ja, ein bisschen.</li>
                </ul>

                <h2>Dialog 3</h2>
                <ul className="Dialog_1">
                    <li>- Und das sind Evdokia und Kyra. Sie kommen aus Griechenland aus Athen.</li>
                    <li>- Hallo, ich bin Karin.</li>
                    <li>- Guten Abend, Karin.</li>
                    <li>- Hallo.</li>
                    <li>- Ihr sprecht aber gut Deutsch.</li>
                    <li>- Oh, wir lernen Deutsch, aber Deutsch ist ein bisschen schwer.</li>
                </ul>
            </div>
            <table className="table_a1">
  <tr>
    <th>Личное местоимение</th>
    <th>Глагол "lernen"</th>
    <th>Глагол "sprechen"</th>
  </tr>
  <tr>
    <td>ich (я)</td>
    <td>lerne (учу)</td>
    <td>spreche (говорю)</td>
  </tr>
  <tr>
    <td>du (ты)</td>
    <td>lernst (учишь)</td>
    <td>sprichst (говоришь)</td>
  </tr>
  <tr>
    <td>er/sie/es (он/она/оно)</td>
    <td>lernt (учит)</td>
    <td>spricht (говорит)</td>
  </tr>
  <tr>
    <td>wir (мы)</td>
    <td>lernen (учимся)</td>
    <td>sprechen (говорим)</td>
  </tr>
  <tr>
    <td>ihr (вы)</td>
    <td>lernt (учите)</td>
    <td>sprecht (говорите)</td>
  </tr>
  <tr>
    <td>sie/Sie (они/вы)</td>
    <td>lernen (учатся)</td>
    <td>sprechen (говорят)</td>
  </tr>
</table>
            <ul className="Dialog_1">
                <li>Sg(Sindular)-единственное число </li>
                <li>Pl(Plural)-множественное число</li>
            </ul>
            <h2>5. Ein Steckbrief - Ergänzen Sie den Text.</h2>
            <ul className="Dialog_1">
                <li>spreche , ist ,	sind , komme , lernen ,	bin	, lerne </li>
                <li>Mein name ist Tian Xu. Ich….....aus China. Ich……….Chinese und…………Chinesich und ein bisschen Deutsch. Jetzt…………… ich Deutsch. Dana und Polo………meine Freunde. Sie……………auch Deutsch.	</li>
            </ul>
            <h2>6. Pablo schreibt ein Nachricht </h2>
            <ul className="Dialog_1">
                <li>Lesen Sie die Texte. Welches Foto passt? Ordnen Sie zu.</li>
            </ul>
            <img className="mt-5" src={Schreibt} style={{ width: "100%" }} alt="" />
            <ul className="Dialog_1 mt-4">
                <li>b.Lesen Sie die Nachricht noch einmal. Kreuzen Sie an: richtig (R) oder falsch (F)?</li>
            </ul>

            <ul className="Dialog_1 mt-3">
                <li>1. Im Deutschkurs sind 14 Leute.</li>
                <li>2. Zwei Leute kommen aus Portugal,</li>
                <li>3. Marek spricht Polnisch.</li>
                <li>4. Der Brasilianer ist 32 Jahre alt.</li>
                <li>5. Kamila ist die Lehrerin.</li>
                <li>6. Anne spricht vier Sprachen. </li>


            </ul>
            <h2>7. Nesrin antwortet</h2>
            <ul className="Dialog_1" >
                <li>
                    Lesen sie den Text. Wer sind die Personen auf den Fotos?
                </li>
            </ul>
            <img className="mt-5" src={Antvorten} style={{ width: "100%" }} alt="" />
            <ul className="Dialog_1" >
                <li>
                    b. Ergänzen Sie den Text mit den Informationen aus Aufgabe
                </li>
                <li>              8.
                    Nesrin arbeitet in der……………..Meyer & Sohn. Dort sind acht…………
                    Sie kommen aus Deutschland, aus der………………..und aus Litauen.
                    Die Freundin von Nesrin heißt………………………Sie arbeitet als……..... Jochen arbeitet im Büro. Er ist der…………….</li>
            </ul>
            <img className="mt-5" src={Ergenzin} style={{ width: "80%" }} alt="" />

        </div>
    )
}

export default Teil2;