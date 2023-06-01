import React from "react";
import img1 from "../../img/4.1.png";
import img2 from "../../img/4.2.png";
import img3 from "../../img/4.3.png";
import img4 from "../../img/4.4.png";
import img5 from "../../img/4.5.png";
import img6 from "../../img/4.6.png";
import img7 from "../../img/4.7.png";
import img8 from "../../img/4.8.png";
import img9 from "../../img/4.9.png";
import img10 from "../../img/4.10.png";
import img11 from "../../img/4.11.png";
import img12 from "../../img/4.12.png";
import img13 from "../../img/4.13.png";
import img14 from "../../img/4.14.png";
import img15 from "../../img/4.15.png";
import img16 from "../../img/4.16.png";
import img17 from "../../img/4.17.png";
import img18 from "../../img/4.18.png";
import { Player } from "../../components/Player";

const Teil4 = () => {
  return (
    <>
      <div className="container text-center ">
        <img className="mt-5 mb-4" src={img1} style={{ width: 600 }} alt="" />
        {/* <ul
          style={{
            textAlign: "start",
            textDecoration: "none",
            listStyleType: "none",
            fontSize: "25px",
          }}
        >
          <li>Ich arbeite-я работаю</li>
          <li>Du arbeitest-ты работаешь</li>
          <li>Er/sie/es arbeitet-он/она/оно работает</li>
          <li>Wir arbeiten-мы работаем</li>
          <li>Ihr arbeitet-вы работаете</li>
          <li>Sie/Sie arbeiten-они работают/Вы работаете</li>
          <li>Ich möchte-я хочу</li>
          <li>Du möchtest-ты хочешь</li>
          <li>Er/sie/es möchte-он/она/оно хочет</li>
          <li>wir möchten-мы хотим </li>
          <li>ihr möchtet-вы хотите </li>
          <li>Sie/Sie möchten-они хотят/Вы хотите</li>
        </ul> */}
        <table className="table_a1">
  <thead>
    <tr>
      <th>Person</th>
      <th>Verb arbeiten</th>
      <th>Перевод</th>
      <th>Verb möchten</th>
      <th>Перевод</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ich</td>
      <td>arbeite</td>
      <td>я работаю</td>
      <td>möchte</td>
      <td>я хочу</td>
    </tr>
    <tr>
      <td>Du</td>
      <td>arbeitest</td>
      <td>ты работаешь</td>
      <td>möchtest</td>
      <td>ты хочешь</td>
    </tr>
    <tr>
      <td>Er/sie/es</td>
      <td>arbeitet</td>
      <td>он/она/оно работает</td>
      <td>möchte</td>
      <td>он/она/оно хочет</td>
    </tr>
    <tr>
      <td>Wir</td>
      <td>arbeiten</td>
      <td>мы работаем</td>
      <td>möchten</td>
      <td>мы хотим</td>
    </tr>
    <tr>
      <td>Ihr</td>
      <td>arbeitet</td>
      <td>вы работаете</td>
      <td>möchtet</td>
      <td>вы хотите</td>
    </tr>
    <tr>
      <td>Sie/Sie</td>
      <td>arbeiten</td>
      <td>они работают</td>
      <td>möchten</td>
      <td>они хотят / Вы хотите</td>
    </tr>
  </tbody>
</table>
        <div className="row">
          <div className="col-6">
            <ul className="Dialog_1 mt-4">
              <li>Hallo, Sofia. Wie geht's?</li>
              <li>Hallo, Dana. Danke, gut. Und wie geht's dir?</li>
              <li>
                Es geht. Ich arbeite heute in der Cafeteria und ich bin so müde!
              </li>
              <li>Oh … Aber morgen arbeitest du nicht, oder?</li>
              <li>Nein, da habe ich frei.</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="Dialog_1 mt-4">
              <li>Ah, hallo, Ben. Ben, das ist Sofia.</li>
              <li>Wir arbeiten zusammen in der Cafeteria.</li>
              <li>Sofia, das ist mein Freund Ben.</li>
              <li>Hallo, Sofia!</li>
            </ul>
          </div>
        </div>

        <img className="mt-5" src={img2} style={{ width: 600 }} alt="" />
        <p style={{ textAlign: "start", fontSize: "25px" }}>
          2. Wie viel kostet?
        </p>
        <Player props={51} />
        <img className="mt-5" src={img3} style={{ width: 600 }} alt="" />
        <img className="mt-5" src={img4} style={{ width: 600 }} alt="" />
        <Player props={51} />
        <p style={{ textAlign: "start", fontSize: "25px" }}>
          4. Lesen Sie den Dialog und ergänzen Sie die Tabelle unten.
        </p>
        <ul
          style={{
            textAlign: "start",
            textDecoration: "none",
            listStyleType: "none",
            fontSize: "25px",
          }}
        >
          <li>-Guten Tag, Frau Fritsche. Was möchten Sie, bitte?</li>
          <li>-Ich möchte einen Tee.</li>
          <li>-Und Sie, Herr Bender? Möchten Sie auch einen Tee?</li>
          <li>-Nein, keinen Tee. Lieber ein Wasser, bitte.</li>
          <li>-Und ich möchte eine Banane, bitte.</li>
          <li>-Ich möchte ein Brötchen.</li>
          <li>-Ein Schinkenbrötchen oder ein Käsebrötchen?</li>
          <li>-Ein Käsebrötchen, bitte.</li>
          <li>-Ja, gerne. Das macht dann fünf Euro siebzig.</li>
        </ul>
        <p style={{ textAlign: "start", fontSize: "25px", color: "red" }}>
          AKKUSATIV-Винительный падеж
        </p>
        <p style={{ textAlign: "start", fontSize: "25px" }}>
          Akkusativ - это винительный падеж, отвечает на вопрос Wen? Was? Wohin?
          (Кого? Что? Куда?). Определенные артикулы, соответственного, мужского
          (der), женского (die), среднего (das) рода и множественного числа
          (die) в винительном падеже склоняются следующим образом: den, die,
          das, die. Неопределенные артикулы соответственного, мужского (ein),
          женского (eine), среднего (ein) рода в винительном падеже - einen,
          eine, ein.
        </p>

        <img className="mt-5" src={img5} style={{ width: 600 }} alt="" />
        <table className="table_a1">
          <tr>
            <th></th>
            <th>Maskulin (м.р.)</th>
            <th>Neutrum (ср.р.)</th>
            <th>Feminin (ж.р.)</th>
          </tr>
          <tr>
            <td>
              Nominativ
              <br />
              (именительный падеж)
            </td>
            <td>
              Der Tee
              <br />
              Ein/kein Tee
            </td>
            <td>
              Das Wasser
              <br />
              Ein/kein Wasser
            </td>
            <td>
              Die Banane
              <br />
              Eine/keine Banane
            </td>
          </tr>
          <tr>
            <td>
              Akkusativ
              <br />
              (винительный падеж)
            </td>
            <td>Einen/keinen Tee</td>
            <td>Ein/kein Wasser</td>
            <td>Eine/keine Banane</td>
          </tr>
        </table>
        <p style={{ fontSize: "25px" }}>
          5. Hören Sie und sprechen Sie nach.(Здесь херен 1.86)
        </p>
        <p style={{ textAlign: "start", fontSize: "25px" }}>
          Tee, sechzehn, Brezeln, sehr, gerne <dr />
          möchte, zwölf, Brötchen, schön
          <br />
          Sechzehn Brezeln, bitte!
          <dr />
          Sehr gerne. Möchtest du Brötchen? Ich möchte zwölf Brötchen.
        </p>
        <Player props={52} />
        <img className="mt-5" src={img6} style={{ width: 600 }} alt="" />
        <Player props={53} />
        <img className="mt-5" src={img7} style={{ width: 600 }} alt="" />
        <Player props={54} />
        <img className="mt-5" src={img8} style={{ width: 600 }} alt="" />
        <Player props={55} />
        <img className="mt-5" src={img9} style={{ width: 600 }} alt="" />
        <Player props={56} />
        <img className="mt-5" src={img10} style={{ width: 600 }} alt="" />

        <div>
          <img className="mt-5" src={img11} style={{ width: 300 }} alt="" />
        </div>
        <table className="table_a1">
          <tr>
            <th></th>
            <th>
              Singular
              <br />
              (единственное число)
            </th>
            <th>
              Plural
              <br />
              (множественное число)
            </th>
          </tr>
          <tr>
            <td>
              das Brot
              <br />
              (хлеб)
            </td>
            <td>das Brot</td>
            <td>die Brote</td>
          </tr>
          <tr>
            <td>
              das Brötchen
              <br />
              (булочка)
            </td>
            <td>das Brötchen</td>
            <td>die Brötchen</td>
          </tr>
          <tr>
            <td>
              die Banane
              <br />
              (банан)
            </td>
            <td>die Banane</td>
            <td>die Bananen</td>
          </tr>
          <tr>
            <td>
              der Apfel
              <br />
              (яблоко)
            </td>
            <td>der Apfel</td>
            <td>die Äpfel</td>
          </tr>
          <tr>
            <td>
              der Stuhl
              <br />
              (стул)
            </td>
            <td>der Stuhl</td>
            <td>die Stühle</td>
          </tr>
          <tr>
            <td>
              das Glas
              <br />
              (стакан)
            </td>
            <td>das Glas</td>
            <td>die Gläser</td>
          </tr>
          <tr>
            <td>
              die Minipizza
              <br />
              (мини пицца)
            </td>
            <td>die Minipizza</td>
            <td>die Minipizzas</td>
          </tr>
        </table>
        <Player props={57} />
        <img className="mt-5" src={img12} style={{ width: 600 }} alt="" />
        <img className="mt-5" src={img13} style={{ width: 600 }} alt="" />
        <Player props={58} />
        <img className="mt-5" src={img14} style={{ width: 600 }} alt="" />
        <Player props={59} />
        <img className="mt-5" src={img15} style={{ width: 600 }} alt="" />
        <img className="mt-5" src={img16} style={{ width: 600 }} alt="" />
        <img className="mt-5" src={img17} style={{ width: 600 }} alt="" />

        {/* <ul
          style={{
            textAlign: "start",
            textDecoration: "none",
            listStyleType: "none",
            fontSize: "25px",
          }}
        >
          <li>Die Freunde - друзья</li>
          <li>Die Fotos - фотографии</li>
          <li>Brauchen - нуждаться</li>
          <li>Lecker - вкусный</li>
          <li>Alt - старый</li>
          <li>Nett - милый</li>
          <li>Neu - новый</li>
          <li>Toll - клевый</li>
          <li>Schön - красивый</li>
          <li>Kaputt - сломанный</li>
          <li>Der Schlüssel - ключ</li>
        </ul> */}
        <table className="table_a1">
  <thead>
    <tr>
      <th>Wort</th>
      <th>Übersetzung</th>
      <th>Rod</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Die Freunde</td>
      <td>друзья</td>
      <td>(p) мн.</td>
    </tr>
    <tr>
      <td>Die Fotos</td>
      <td>фотографии</td>
      <td>(p) мн.</td>
    </tr>
    <tr>
      <td>Brauchen</td>
      <td>нуждаться</td>
      <td></td>
    </tr>
    <tr>
      <td>Lecker</td>
      <td>вкусный</td>
      <td></td>
    </tr>
    <tr>
      <td>Alt</td>
      <td>старый</td>
      <td></td>
    </tr>
    <tr>
      <td>Nett</td>
      <td>милый</td>
      <td></td>
    </tr>
    <tr>
      <td>Neu</td>
      <td>новый</td>
      <td></td>
    </tr>
    <tr>
      <td>Toll</td>
      <td>клевый</td>
      <td></td>
    </tr>
    <tr>
      <td>Schön</td>
      <td>красивый</td>
      <td></td>
    </tr>
    <tr>
      <td>Kaputt</td>
      <td>сломанный</td>
      <td></td>
    </tr>
    <tr>
      <td>Der Schlüssel</td>
      <td>ключ</td>
      <td>(m) муж.</td>
    </tr>
  </tbody>
</table>
        <img className="mt-5" src={img18} style={{ width: 800 }} alt="" />
      </div>
    </>
  );
};
export default Teil4;
