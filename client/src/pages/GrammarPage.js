import React from 'react';
import {Link} from 'react-router-dom';

import phonetics from '../img/phonetics.png';
import nouns from '../img/nouns.png';
import pronouns from '../img/pronouns.png';
import verbs from '../img/verbs.png';
import adjectives from '../img/adjectives.png';
import prepositions from '../img/prepositions.png';
import numerals from '../img/numerals.png';
import syntax from '../img/syntax.png';
import adverbs from '../img/adverbs.png';

const GrammarListItem = ({ href, imgSrc, caption }) => {
  return (
    <li className="col-sm-6 col-md-4 card card-bordered h" style={{ height: '271px' }}>
      <Link to={href}>
        <img className="img-responsive" src={imgSrc} alt="" />
        <div className="card-caption">{caption}</div>
      </Link>
    </li>
  );
};

const grammarListData = [
  { href: '/grammar/phonetics', imgSrc: phonetics, caption: 'Фонетика' },
  { href: '/grammar/nouns', imgSrc: nouns, caption: 'Существительные и артикли' },
  { href: '/grammar/pronouns', imgSrc: pronouns, caption: 'Местоимения' },
  { href: '/grammar/verbs', imgSrc: verbs, caption: 'Глаголы' },
  { href: '/grammar/adjectives', imgSrc: adjectives, caption: 'Прилагательные' },
  { href: '/grammar/adverbs', imgSrc: adverbs, caption: 'Наречия' },
  { href: '/grammar/prepositions', imgSrc: prepositions, caption: 'Предлоги' },
  { href: '/grammar/numerals', imgSrc: numerals, caption: 'Числа' },
  { href: '/grammar/syntax', imgSrc: syntax, caption: 'Синтаксис' },
];

const GrammarPage = () => {
  return (
    <section className="section-sm">
        {/* <nav aria-label="breadcrumb">
        <div className='container'>
        <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item active" >Data</li>
  </ol>
  </div>
</nav> */}


      <div className="container frame">
        <h1 className="text-center">Грамматика</h1>
        <ul className="cards list-inline list-unstyled row text-center equal-height">
          {grammarListData.map((item) => (
            <GrammarListItem key={item.href} href={item.href} imgSrc={item.imgSrc} caption={item.caption} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GrammarPage;
