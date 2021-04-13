import React, { useState, useEffect }  from 'react';
import TermBlink from '../../components/termblink';
import listNamedLevels from './listNamedLevels'
import './stylesheet.scss'
const DistinctiiPage = props =>{
    const levelNamesONI = listNamedLevels();

    return <>
        <h1> <TermBlink blink>Distincții etapa națională OSEPI</TermBlink> </h1>
        <ul>
            {Object.keys(levelNamesONI).map(cell => (<li><a href ={`${window.HOST}/static/awards/`+ cell + `.pdf`}>{levelNamesONI[cell]}</a></li>))}
        </ul>
        <a href= {`${window.HOST}/static/awards/lot_juniori.pdf`}>Calificați lot juniori</a> <br />
        <a href= {`${window.HOST}/static/awards/lot_seniori.pdf`}>Calificați lot seniori</a>
    </>
}

export default DistinctiiPage;