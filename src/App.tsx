import React from 'react';
import {Header} from './components/header/Header';
import {Intro} from './components/intro/Intro';
import {Skills} from './components/skills/Skills';
import {Projects} from './components/projects/Projects';
import {SearchingFor} from './components/searchingFor/SearchingFor';
import {Contacts} from './components/contacts/Contacts';
import {Footer} from './components/footer/Footer';


function App() {
    return (
        <>
            <Header/>
            <Intro/>
            <Skills/>
            <Projects/>
            <SearchingFor/>
            <Contacts/>
            <Footer/>
        </>
    );
}

export default App;
