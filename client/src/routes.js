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
    if (data && data.userEmail === 'admin@gmail.com') {
      setAdmin(true)
    }
  }, [data]);

  if (!isAuthenticated) {
    return (<>
      <Header props={admin} />
      <Routes>
          {admin && (
            <Route path="/AdminPanel" exact element={ <AdminPanel />}/>
     
          )}
        <Route path="/" element={<HomePage />}/>
        <Route path='*' element={<NotFound />}/>
        <Route path="/AuthPage" exact   element={<Welcome/>} />
        <Route path="/Courses" exact   element={<Courses />} />
        <Route path="/Courses//Courses_A1" exact   element={<Courses_A1 />} />
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

