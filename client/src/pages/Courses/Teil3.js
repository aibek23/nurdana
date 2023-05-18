import React from "react";
import img1 from "../../img/013654.png";
import img2 from "../../img/014207.png";
import img3 from "../../img/014122.png";
import img4 from "../../img/014233.png";
import img5 from "../../img/014255.png";
import img6 from "../../img/014315.png";
import img7 from "../../img/014353.png";
import img8 from "../../img/014412.png";
import img9 from "../../img/014435.png";
import img10 from "../../img/014516.png";
import img11 from "../../img/014459.png";
import { Player } from "../../components/Player";

import Spitzer from "../../img/125320.png";
import Student from "../../img/33947.png";
import Lektion from "../../img/124952.png";

const Teil3 = () => {
  return (
    <div className="container text-center ">
      <img className="mt-5" src={Lektion} style={{ maxWidth: "70vw" }} alt="" />
      <img className="mt-5" src={Spitzer} style={{ maxWidth: "70vw" }} alt="" />
      <img className="mt-5" src={Student} style={{ maxWidth: "70vw" }} alt="" />

      {/* <h1>Немецкие фразы </h1> */}
      <div className="row">
        <div className="col-6">
          {" "}
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
          </ul>
        </div>
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
          </ul>
        </div>
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
        <thead>
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

      <div
        class="container d-flex flex-wrap "
        style={{ flexDirection: "column" }}
      >
        <h1>Отрицания в немецком языке</h1>
        <p>Есть два типа отрицаний:</p>
        <ul style={{ textAlign: "start" }}>
          <li>kein (для отрицания имён существительных);</li>
          <li>nicht (для отрицания всех остальных частей речи).</li>
        </ul>
        <h2>Отрицание с помощью "kein"</h2>
        <p>
          "Kein" ведет себя как неопределенный артикль и склоняется в
          зависимости от рода, числа и падежа:
        </p>
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
        <p style={{ textAlign: "start" }}>
          Чтобы отрицать существительные с определённым артиклем, или
          притяжательным местоимением, или другие части речи, или всё
          предложение в целом, нужно использовать частичку "nicht".
        </p>
        <p style={{ textAlign: "start" }}>
          И главный наш вопрос: где она должна стоять? Как и в русском, она
          может находится на разных позициях в зависимости от того, что мы
          отрицаем и на чем мы хотим сделать акцент. Но для отрицания всего
          предложения у "nicht" есть четкая позиция:
        </p>
        <ol style={{ textAlign: "start" }}>
          <li>
            Перед прилагательным или наречием: <code>Das ist nicht lustig</code>{" "}
            — это не весело.
          </li>
          <li>
            Перед предлогом:
            <code> Er kommt nicht aus Deutschland</code> — он не из Германии.
          </li>
          <li>
            Перед вторым глаголом:
            <code>Ich kann heute nicht kommen </code>— я сегодня не могу прийти.
          </li>
          <li>
            Перед определенным артиклем или притяжательным местоимением:
            <code>Ich sehe nicht den Hund </code>— я не вижу собаку (конкретную
            собаку).
          </li>
          <li>
            {" "}
            В конце предложения, если нету ничего из вышеуказанного:
            <code>Ich arbeite heute Nachmittag nicht</code> — я не работаю
            сегодня во второй половине дня{" "}
          </li>
        </ol>
      </div>
      <Player props={21} />
      <img className="  mt-3 mb-5" src={img1} style={{ width: 600 }} alt="" />
      <Player props={21} />
      <img className="  mt-3 mb-5" src={img2} style={{ width: 600 }} alt="" />
      <Player props={21} />
      <img className="  mt-3 mb-5" src={img3} style={{ width: 600 }} alt="" />
      <div className="row justify-content-center">
        <div>
          <img
            className="card-img-top mt-5"
            src={img4}
            style={{ width: 250 }}
            alt=""
          />
          <div className="card-body">
            <p className="card-text">Ein Schirm - Один какой-то зонт</p>
            <p className="card-text">Mein Schirm - Мой зонт</p>
            <p className="card-text">Mein Schirm - Мой зонт</p>
            <p className="card-text">Mein Schirm - Мой зонт</p>
          </div>
        </div>

        <div>
          <img
            className="card-img-top mt-5"
            src={img5}
            style={{ width: 250 }}
            alt=""
          />
          <div className="card-body">
            <p className="card-text">Ein Buch- одна какая-та книга</p>
            <p className="card-text">Mein Buch- Моя книга</p>
            <p className="card-text">Dein Buch- Твоя книга</p>
            <p className="card-text">Das Buch von Tom- Эта книга Тома</p>
          </div>
        </div>

        <div>
          <img
            className="card-img-top mt-5"
            src={img6}
            style={{ width: 250 }}
            alt=""
          />
          <div className="card-body">
            <p className="card-text">Die Brille- Какие-то очки</p>
            <p className="card-text">Meine Brille-Мои очки</p>
            <p className="card-text">Deine Brille-Твои очки</p>
            <p className="card-text">Die Brille von Tom-Эти очки Тома</p>

          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <img className="mt-5" src={img7} style={{ width: 250 }} alt="" />
        <img className="mt-5" src={img8} style={{ width: 250 }} alt="" />
        <img className="mt-5" src={img9} style={{ width: 250 }} alt="" />
        <ul className="Dialog_1 mt-3">
          <li>- Hier ist ein Kuli. Ist das dein Kuli, Dana?</li>
          <li>- Ja, das ist mein Kuli. Danke.</li>
          <li>- Das ist ein Handy. Ist das dein Handy, Maria?</li>
          <li>- Nein, das ist das Handy von Ben.</li>
          <li>- Wo ist meine Brille?</li>
          <li>- Hier ist eine Brille. Ist das deine Brille, Eleni?</li>
          <li>- Ja, danke.</li>
        </ul>
      </div>
      <Player props={21} />
      <img className=" mt-3 mb-5" src={img11} style={{ width: 600 }} alt="" />
      <Player props={21} />
      <img className="  mt-3 mb-5" src={img10} style={{ width: 600 }} alt="" />
    </div>
  );
};

export default Teil3;
