import React from "react";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";
import img5 from "../../img/5.png"
import img6 from "../../img/6.png"
import img7 from "../../img/7.png"
import img8 from "../../img/8.png"
import img9 from "../../img/9.png"
import img10 from "../../img/10.png"
import img11 from "../../img/11.png"
import img12 from "../../img/145350.png"

import Horen2 from "../../img/202037.png"
import { Player } from "../../components/Player";


import Herzlich from "../../img/A1_1.png"

const Teil1 = () => {

    return (

        <div className="container text-center ">
            <div className="d-flex flex-column align-itmes-center justify-content-center" style={{ "alignItems": "center" }}>
                <img className="mt-5" src={Herzlich} style={{ width: 600 }} alt="" />
               <Player props={2.99} />
                
                {//<Player props={1} />
                }
                <img className="mt-5" src={img1} style={{ width: 600 }} alt="" />
                {//<Player props={2} />
                }
                <img className="mt-5" src={img2} style={{ width: 600 }} alt="" />
                {//<Player props={3} />
                }
                <img className="mt-5" src={img3} style={{ width: 600 }} alt="" />
                {//<Player props={4} />
                }
                {//<Player props={5} />
                }
                <img className="mt-5" src={img4} style={{ width: 600 }} alt="" />
                {//<Player props={6} />
                }
                <img className="mt-5" src={img5} style={{ width: 600 }} alt="" />
                {//<Player props={7} />
                }
                <img className="mt-5" src={img6} style={{ width: 600 }} alt="" />
                {//<Player props={8} />
                }
                <div className="container d-flex flex-wrap mt-3" style={{ "flexDirection": "column" }}>
                    <p>(1)Ich wohne jetzt in München-Pasing.			(2)Ich komme aus León.</p>
                    <div className="dialogue-container">
                        <div className="dialogue" style={{ "textAlign": "start" }}>
                            <p>Woher kommen Sie, Frau Dumitru?</p>
                            <p>Ich komme aus Rumänien, aus Deva.</p>
                            <p>Und wo wohnen Sie jetzt?</p>
                            <p>Ich wohne in München. Und Sie, Frau Dahms?</p>
                            <p>Ich komme aus Berlin und wohne jetzt in München-Pasing.</p>
                        </div>
                        <div className="dialogue" style={{ "textAlign": "start" }}>
                            <p>Hallo, ich bin Pablo und wer bist du?</p>
                            <p>Ich heiße Dana. Ich komme aus Lublin. Das ist in Polen.</p>
                            <p>Woher kommst du?</p>
                            <p>Ich komme aus León, Spanien.</p>
                            <p>Und wo wohnst du jetzt?</p>
                            <p>In München.</p>
                        </div>
                    </div>
                </div>
            </div>
            {//<Player props={9} />
            }
            <img className="mt-5" src={img7} style={{ width: 600 }} alt="" />
            {//<Player props={10} />
                }
            <img className="mt-5" src={img8} style={{ width: 600 }} alt="" />
            {//<Player props={11} />
                }
            <img className="mt-5" src={img9} style={{ width: 600 }} alt="" />
            {//<Player props={12} />
                }
            <img className="mt-5" src={img10} style={{ width: 600 }} alt="" />
            {//<Player props={13} />
                }
            <img className="mt-5" src={img11} style={{ width: 600 }} alt="" />
            {//<Player props={14} />
            }
            <div className="dialogue" style={{ "textAlign": "start" }}>
                <h3>Schreiben Sie den Dialog. Hören Sie zur Kontrolle.</h3>
                <p>Ich komme aus Chicago, USA.</p>
                <p>Hallo, ich bin Ben. Und wer bist du?</p>
                <p>In München.</p>
                <p>O Ich heiße Eleni. Ich komme aus Deva.</p>
                <p>Das ist in Rumänien. Woher kommst du?</p>
                <p>O Und wo wohnst du jetzt?</p>
                <p>(Hallo, ich bin Ben …)</p>
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
            {//<Player props={15} />
            }
            <h1 className="mt-5"> При неформальной ситуации общения используйте аналоги приведенных фраз, а именно:</h1>
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
            {//<Player props={16} />
            }
            <h1>German Verbs</h1>
            <table className="table_a1">
                <tr>
                    <th>Личное местоимение</th>
                    <th>Глагол "heißen"</th>
                    <th>Глагол "sein"</th>
                    <th>Глагол "haben"</th>
                </tr>
                <tr>
                    <td>ich (меня)</td>
                    <td>heiße (зовут)</td>
                    <td>bin (быть)</td>
                    <td>habe (иметь)</td>
                </tr>
                <tr>
                    <td>du (тебя)</td>
                    <td>heißt (зовут)</td>
                    <td>bist (есть)</td>
                    <td>hast (имеешь)</td>
                </tr>
                <tr>
                    <td>er/sie/es (его/её/его)</td>
                    <td>heißt (зовут)</td>
                    <td>ist (есть)</td>
                    <td>hat (имеет)</td>
                </tr>
                <tr>
                    <td>wir (мы - нас)</td>
                    <td>heißen (зовут)</td>
                    <td>sind (есть)</td>
                    <td>haben (имеем)</td>
                </tr>
                <tr>
                    <td>ihr (вас)</td>
                    <td>heißt (зовут)</td>
                    <td>seid (есть)</td>
                    <td>habt (имеете)</td>
                </tr>
                <tr>
                    <td>sie/Sie (их/Вас)</td>
                    <td>heißen (зовут)</td>
                    <td>sind (есть)</td>
                    <td>haben (имеют)</td>
                </tr>
            </table>
            {//<Player props={17} />
}
            <h1>W-Fragen Beispiele</h1>
            <p>Вопросы с вопросительным словом. В немецком языке вопросительные слова начинаются с буквы W (wo, wer, was, wie). По этой причине их часто называют W-Fragen. В W-Fragen вопросительное слово всегда стоит на первом месте, а глагол на втором.</p>
            <table className="table_a1">
                    <tr>
                        <td>Wie heißt du?</td>
                        <td>Как тебя зовут?</td>
                    </tr>
                    <tr>
                        <td>Wer bist du?</td>
                        <td>Кто ты?</td>
                    </tr>
                    <tr>
                        <td>Woher kommst du?</td>
                        <td>Откуда ты приехал?</td>
                    </tr>
                    <tr>
                        <td>Ich komme aus Deutschland</td>
                        <td>Я из Германии</td>
                    </tr>
                    <tr>
                        <td>Was ist das?</td>
                        <td>Что это?</td>
                    </tr>
                    <tr>
                        <td>
                            Wo wohnst du? </td><td>

                            Где ты живешь?</td>

                    </tr>
                    <tr>
                        <td>Ich wohne in Bischkek</td><td>Я живу в Бишкеке а ты?</td>
                    </tr>
                    <tr>
                        <td>Ich wohne in Berlin</td>
                        <td>Я живу в Берлине.</td>
                    </tr>
                className
            </table>
            {//<Player props={19} />
            }
            <h1>Länder-страны</h1>
            <table className="table_a1">
                    <tr>
                        <td>Kirgisistan</td>
                        <td>Кыргызстан</td>
                    </tr>
                    <tr>
                        <td>Deutschland</td>
                        <td>Германия</td>
                    </tr>
                    <tr>
                        <td>Russland</td>
                        <td>Россия</td>
                    </tr>
                    <tr>
                        <td>Griechenland</td>
                        <td> Греция</td>
                    </tr>
                    <tr>
                        <td>Brasilien</td>
                        <td>Бразилия</td>
                    </tr>
                    <tr>
                        <td>die Türkei</td>
                        <td>Турция</td>
                    </tr>
                    <tr>
                        <td>die Schweiz</td>
                        <td>Швейцария</td>
                    </tr>
                    <tr>
                        <td>Kroatien</td>
                        <td>Хорватия</td>
                    </tr>
                    <tr>
                        <td>    die Ukraine</td>
                        <td>Украина</td>
                    </tr>
                    <tr>
                        <td>        die USA</td>
                        <td>США</td>
                    </tr>
            </table>
            {//<Player props={20} />
}
            <h1>            Спряжение глагола wohnen – жить</h1>
            <table className="table_a1">
                className
                    <tr>
                        <td>Ich	<span>  </span>    </td>
                        <td>	<span>  </span>    wohn+e</td>
                    </tr>
                    <tr>
                        <td>Du 	<span>  </span> </td>
                        <td>	<span>  </span>    wohn+st</td>
                    </tr>
                    <tr>
                        <td>Er, sie, es 	<span>  </span> 	</td>
                        <td>	<span>  </span>    wohn+t</td>
                    </tr>
                    <tr>
                        <td>Wir	</td>
                        <td>	<span>  </span>    wohn+t</td>
                    </tr>
                    <tr>
                        <td>Ihr	</td>
                        <td>	wohn+t</td>
                    </tr>
                    <tr>
                        <td>Sie, sie	</td>
                        <td>wohn+en</td>
                    </tr>

                className
            </table>
            {//<Player props={21} />
            }
            <h1> Спряжение глагола kommen - (приехал, прибывать)</h1>

            <p> </p>
            <table className="table_a1">
                className
                    <tr>
                        <td>Ich
                        </td>
                        <td>	<span>  </span>    komme</td>
                    </tr>
                    <tr>
                        <td> Du </td>
                        <td>	<span>  </span>  kommst</td>
                    </tr>
                    <tr>
                        <td> Er\sie\es </td>
                        <td>	<span>  </span>    kommt</td>
                    </tr>
                    <tr>
                        <td>Wir	</td>
                        <td>	<span>  </span>    kommen</td>
                    </tr>
                    <tr>
                        <td>Ihr	</td>
                        <td>	kommt</td>
                    </tr>
                    <tr>
                        <td>Sie, sie	</td>
                        <td>kommen</td>
                    </tr>

                className
            </table>
            {//<Player props={22} />
}
            <h2>a. Hören Sie. Welches Foto passt? Kreuzen Sie an.</h2>
            <img className="mt-5 mb-5 container" src={Horen2} style={{ height: 350 }} alt="" />
            {//<Player props={23} />
}
            <h3>b Hören Sie noch einmal und lesen Sie mit. Ergänzen Sie das Formular.</h3>

            
            <div className="row"> 
            <div className="col-lg-6">
            <ul className="Dialog_1">
                <li>Wie ist Ihr Familienname?</li>
                <li>Dumitru.</li>
                <li>Wie schreibt man das, bitte?</li>
                <li>D-u-m-i-t-r-u.</li>
                <li>Und wie ist Ihr Vorname?</li>
                <li>Eleni: E-L-E-N-I</li>
                <li>Woher kommen Sie?</li>
                <li>Aus Rumänien.</li>
                <li>Wo wohnen Sie?</li>
                <li>Hier in Munchen, BlumenstraBe 4.</li>
                <li>Wie ist Ihre Postleitzahl?</li>
                <li>80331.</li>
                <li>Wie ist Ihre Telefonnummer?</li>
                <li>089 63822392.</li>
                <li>Danke Frau Dumitru. Auf Wiedersehen.</li>
                <li>Auf Wiedersehen.</li>
            </ul>
           
            </div>
            <div className="col-lg-6">

            <img className="mt-2 mb-2 container" src={img12} style={{ height: 350 }} alt="" />
            <ul className="Dialog_1" style={{ color: "red" }}>
                <li>Unternehmen: K&amp;L - Dienstleistungen GmbH</li>
                <li>Familienname: Dumitru</li>
                <li>Vorname: Eleni</li>
                <li>Herkunft (Land): Rumänien</li>
                <li>Adresse: Munchen, Blumenstraße 4, 80331</li>
                <li>Telefon: 089 63822392</li>
            </ul>
            </div>
         
            </div>
            <table className="table_a1">
                <tr>
                    <th>Numerisch</th>
                    <th>Deutsch</th>
                    <th>Russisch</th>
                </tr>
                <tr>
                    <td>0</td>
                    <td>null</td>
                    <td>ноль</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>eins</td>
                    <td>один</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>zwei</td>
                    <td>два</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>drei</td>
                    <td>три</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>vier</td>
                    <td>четыре</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>fünf</td>
                    <td>пять</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>sechs</td>
                    <td>шесть</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>sieben</td>
                    <td>семь</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>acht</td>
                    <td>восемь</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>neun</td>
                    <td>девять</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>zehn</td>
                    <td>десять</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>elf</td>
                    <td>одиннадцать</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>zwölf</td>
                    <td>двенадцать</td>
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
            </table>
            {//<Player props={15} />
            }
        </div>
    )
}

export default Teil1;