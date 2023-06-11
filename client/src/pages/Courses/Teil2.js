import React from "react";
import { useEffect, useState } from "react";
import useSound from "use-sound"; //для работы со звуком
// import img1 from "../../img/101216.png";
import img2 from "../../img/031623.png";
import img3 from "../../img/031651.png";
import img4 from "../../img/031714.png";
import img5 from "../../img/031734.png";
import img6 from "../../img/031759.png";
import img7 from "../../img/031823.png";
import img8 from "../../img/222203.png";
import { Player } from "../../components/Player";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок
// import Herzlich from "../../img/A1_1.png"
import Horen from "../../img/101216.png";
import Fokus from "../../img/103921.png";
import Schreibt from "../../img/104456.png";
import Antvorten from "../../img/120831.png";
import Ergenzin from "../../img/121110.png";
import Title2 from "../../img/tile2.png";
const audioTracks = [];
const defaultTrackIndex = 0;
const Teil2 = () => {
  return (
    <div className="container text-center ">
      <img className="mt-5 mb-3" src={Title2} style={{ width: 600 }} alt="" />

      <h1>Die Telefonnumer- номер телефона</h1>
      <p>
        Vorname-имя <br /> Familienname- фамилия
      </p>
      <Player props={26} />
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
      <Player props={27} />
      <p>
        Ja/Nein-Fragen называются так, <br />
        потому что ответить на них можно одним словом ja, nein.
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
      <p>
        Hören Sie die Dialoge. Ordnen Sie die Dialoge den Fotos zu. Lesen Sie
        die Dialoge laut.
      </p>
      <img className="mt-5" src={Horen} style={{ width: "100%" }} alt="" />
      <h2>Dialog 1</h2>
      <Player props={28} />
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
        <Player props={29} />
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
        <Player props={30} />
        <ul className="Dialog_1">
          <li>
            - Und das sind Evdokia und Kyra. Sie kommen aus Griechenland aus
            Athen.
          </li>
          <li>- Hallo, ich bin Karin.</li>
          <li>- Guten Abend, Karin.</li>
          <li>- Hallo.</li>
          <li>- Ihr sprecht aber gut Deutsch.</li>
          <li>
            - Oh, wir lernen Deutsch, aber Deutsch ist ein bisschen schwer.
          </li>
        </ul>
      </div>
      <Player props={31} />
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
        <li>spreche ,<s>ist</s> , sind , komme , lernen , bin , lerne </li>
        <li style={{"textAlign":"start"}}>
          Mein name ist Tian Xu. Ich….....aus China. Ich……….Chinese
          und…………Chinesich und ein bisschen Deutsch. Jetzt…………… ich Deutsch.
          Dana und Polo………meine Freunde. Sie……………auch Deutsch.
        </li>
      </ul>
      <h2>6. Pablo schreibt ein Nachricht </h2>
      <ul className="Dialog_1">
        <li>Lesen Sie die Texte. Welches Foto passt? Ordnen Sie zu.</li>
      </ul>
      <img className="mt-5" src={Schreibt} style={{ width: "100%" }} alt="" />
      <ul className="Dialog_1 mt-4">
        <li>
          b.Lesen Sie die Nachricht noch einmal. Kreuzen Sie an: richtig (R)
          oder falsch (F)?
        </li>
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
      <ul className="Dialog_1">
        <li>Lesen sie den Text. Wer sind die Personen auf den Fotos?</li>
      </ul>
      <img className="mt-5" src={Antvorten} style={{ width: "100%" }} alt="" />
      <ul className="Dialog_1">
        <li>b. Ergänzen Sie den Text mit den Informationen aus Aufgabe</li>
        <li style={{"textAlign":"start"}}>
          8. Nesrin arbeitet in der……………..Meyer & Sohn. Dort sind acht………… Sie
          kommen aus Deutschland, aus der………………..und aus Litauen. Die Freundin
          von Nesrin heißt………………………Sie arbeitet als……..... Jochen arbeitet im
          Büro. Er ist der…………… .
        </li>
      </ul>
      <img className="mt-5" src={Ergenzin} style={{ width: "500px" }} alt="" />
      {/* (здесь аудио 1.31) */}
      <Player props={32} />
      <div className="row mt-5">
        <div
          className="col-lg-6 "
          style={{ display: "flex", justifyContent: "start" }}
        >
          <p className="" style={{ textAlign: "start", fontSize: "25px" }}>
            а. Hören Sie das Telefongespräch. Nummerieren Sie die Fotos. <br />
            b. Hören Sie noch einmal. Wer sagt das? Ordnen Sie zu.
            <br />
            Meine Nummer ist 9-3-3-4-0-2-7. <br />
            Wie bitte? Bitte noch einmal langsam.
            <br />
            Vielen Dank, auf Wiederhören.
            <br />
            Kein Problem!
            <br />
            Die Telefonnummer ist falsch.
            <br />
            Das ist der Chef!
          </p>
        </div>
        <div className="col-lg-6">
          <img className="mt-3" src={img2} style={{ width: "500px" }} alt="" />
          <Player props={33} />
        </div>
      </div>
      <img className="mt-3" src={img3} style={{ width: "500px" }} alt="" />
      <Player props={34} />
      <img className="mt-3" src={img4} style={{ width: "500px" }} alt="" />
      <Player props={35} />
      <img className="mt-3" src={img5} style={{ width: "500px" }} alt="" />
      <Player props={36} />

      <h3 className="mt-3">
        Hören Sie die Dialoge. Beantworten Sie die Fragen: ja oder nein? Kreuzen
        Sie an.
      </h3>
      <div className="row">
        <div className="col-lg-6">
          <ol className="mt-3 text-left" style={{ fontSize: "25px" }}>
            <li> Hat Ben WhatsApp?</li>
            <li> Ist Pablo bei Facebook?</li>
            <li> Hat Dana Skype? </li>
            <li> Hat Nesrin eine E-Mail-Adresse?</li>
            <li> Ist Nesrin bei Facebook?</li>
          </ol>
        </div>
        <div className="col-lg-6">
          <img className="mt-3" src={img6} style={{ width: "250px" }} alt="" />
        </div>
      </div>
      <Player props={37} />
      <img className="mt-3" src={img7} style={{ width: "500px" }} alt="" />
      <h3 className="mt-3">
        Ergänzen Sie die Formen von haben und sein. Hören Sie zur Kontrolle.
      </h3>
      <Player props={38} />
      <ol className="mt-3 text-left" style={{ fontSize: "25px" }}>
        <li>1. Hast du Skype?</li>
        <li>2. ... Sie WhatsApp?</li>
        <li>3. ... Sie bei Facebook?</li>
        <li>4. Wie … die E-Mail-Adresse von Ben?</li>
        <li>5. Nesrin, … du bei Facebook?</li>
      </ol>
      <Player props={39} />
      <img className="mt-3" src={img8} style={{ width: "500px" }} alt="" />
    </div>
  );
};

export default Teil2;
