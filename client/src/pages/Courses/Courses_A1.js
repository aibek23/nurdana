import React from "react";
import Herzlich from "../../img/A1_1.png"

const Courses_A1 = () => {
    return(
        
        <div className="container text-center ">
            <img className="mt-5" src={Herzlich} style={{width:500}} alt="" />
            
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
        </table></div>
    )
}

export default Courses_A1;