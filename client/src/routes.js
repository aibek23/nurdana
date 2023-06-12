import React,{useState,useEffect } from 'react'
import { Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {AuthPage} from './pages/AuthPage'
import { Header } from './components/Header'
import {NotFound} from './pages/NotFound'
import { Footer } from './components/Footer'
import {AdminPanel} from './pages/AdminPanel'
import { Courses } from './pages/Courses'
import {Welcome} from "./pages//Welcome";

import Courses_A1 from "./pages/Courses/Courses_A1"
import Teil1 from './pages/Courses/Teil1'
import Teil2 from './pages/Courses/Teil2'
import Teil3 from './pages/Courses/Teil3'
import Teil4 from './pages/Courses/Teil4'

import Tests from './pages/Tests/Tests'
import Lecktion1 from './pages/Tests/Lecktion1'
import Lecktion2 from './pages/Tests/Lecktion2'
import Lecktion3 from './pages/Tests/Lecktion3'
import Lecktion4 from './pages/Tests/Lecktion4'
// import Lecktion1 from './pages/Tests/Lecktion1'

import Media from './pages/Media'

import GrammarPage from './pages/GrammarPage'
import Alphabet from './pages/Grammar/Alphabet'
import Nouns from './pages/Grammar/Nouns'
import Pronouns from './pages/Grammar/Pronouns'
import Verbs from './pages/Grammar/Verbs'
import Adjectives from './pages/Grammar/Adjectives'
import Prepositions from './pages/Grammar/Prepositions'
import Adverbs from './pages/Grammar/Adverbs'
import Numerals from './pages/Grammar/Numerals'
import Syntax from './pages/Grammar/Syntax'

export const useRoutes = (isAuthenticated) => {
  const [admin, setAdmin] = useState(null);
  const data = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    if (data && data.userId === '64689a53239a224948afe3e6') {
      setAdmin(true)
    }
  }, [data]);

  if (!isAuthenticated) {
    return (<>
      <Header props={data} />
      <Routes>
          {admin && (
            <Route path="/admin"  element={ <AdminPanel />}/>
     
          )}
        <Route path="/" element={<HomePage />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path="/AuthPage" exact   element={<Welcome/>} />
        <Route path="/Courses" exact   element={<Courses_A1 />} />
        <Route path="/teil1" exact   element={<Teil1 />} />
        <Route path="/teil2" exact   element={<Teil2 />} />
        <Route path="/teil3" exact   element={<Teil3 />} />
        <Route path="/teil4" exact   element={<Teil4 />} />

        <Route path="/tests" element={<Tests/>} />
        <Route path="/test/lecktion1" element={<Lecktion1/>} />
        <Route path="/test/lecktion2" element={<Lecktion2/>} />
        <Route path="/test/lecktion3" element={<Lecktion3/>} />
        <Route path="/test/lecktion4" element={<Lecktion4/>} />

        <Route path='/Media' exact element={<Media />} />
          
        <Route path="/grammar" exact   element={<GrammarPage />} />
        <Route path="/grammar/phonetics" exact   element={<Alphabet />} />
        <Route path="/grammar/nouns" exact   element={<Nouns />} />
        <Route path="/grammar/pronouns" exact   element={<Pronouns />} />
        <Route path="/grammar/verbs" exact   element={<Verbs />} />
        <Route path="/grammar/adjectives" exact   element={<Adjectives />} />
        <Route path="/grammar/prepositions" exact   element={<Prepositions />} />
        <Route path="/grammar/adverbs" exact   element={<Adverbs />} />
        <Route path="/grammar/numerals" exact   element={<Numerals />} />
        <Route path="/grammar/syntax" exact   element={<Syntax />} />
        <Route path="/HomePage" exact   element={<HomePage />} />
      </Routes>
      <Footer />
      </>
    );
  }

  return (
    <>
       <Header />
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/AuthPage" exact   element={<AuthPage />} />
        <Route path="/Courses" exact   element={<AuthPage />} />
        <Route path="/teil1" exact   element={<Teil1 />} />
        <Route path="/teil2" exact   element={<Teil2 />} />
        <Route path="/teil3" exact   element={<Teil3 />} />
        <Route path="/teil4" exact   element={<Teil4 />} />
        <Route path='/Media' exact element={<Media />} />
        <Route path="/grammar" exact   element={<GrammarPage />} />
        <Route path="/grammar/phonetics" exact   element={<Alphabet />} />
        <Route path="/grammar/nouns" exact   element={<Nouns />} />
        <Route path="/grammar/pronouns" exact   element={<Pronouns />} />
        <Route path="/grammar/verbs" exact   element={<Verbs />} />
        <Route path="/grammar/adjectives" exact   element={<Adjectives />} />
        <Route path="/grammar/prepositions" exact   element={<Prepositions />} />
        <Route path="/grammar/adverbs" exact   element={<Adverbs />} />
        <Route path="/grammar/numerals" exact   element={<Numerals />} />
        <Route path="/grammar/syntax" exact   element={<Syntax />} />
        <Route path="/HomePage" exact   element={<HomePage />} />
      </Routes>
      < Footer/>
    </>
  );
};

