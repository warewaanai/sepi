import React, { useState, useEffect }  from 'react';
import TermBlink from '../../components/termblink';
import listNamedLevels from './listNamedLevels'
import './stylesheet.scss'
const EtapePage = props =>{
    const [levelLinksOJI, setLevelLinksOJI] = useState(0);
    const [levelLinksONI, setLevelLinksONI] = useState(0);
    const levelNamesOJI = listNamedLevels(true);
    const levelNamesONI = listNamedLevels(false);

    useEffect(() => {fetch(window.HOST + "/api/round/oji").then(res => res.json()).then(res => setLevelLinksOJI(res))}, [])
    useEffect(() => {fetch(window.HOST + "/api/round/oni").then(res => res.json()).then(res => setLevelLinksONI(res))}, [])


    return <>
        <h1> <TermBlink blink>Etape precedente</TermBlink> </h1>
        <p>Enunțuri, descrieri de soluții, teste și rezultate ale etapelor precedente OSEPI</p>
        <h3>Etapa județeană</h3>
        <ul>
            {Object.keys(levelLinksOJI).map(cell => (<li><a href ={levelLinksOJI[cell]}>{levelNamesOJI[cell]}</a></li>))}
        </ul>
        <h3>Etapa națională</h3>
        <ul>
            {Object.keys(levelLinksONI).map(cell => (<li><a href ={levelLinksONI[cell]}>{levelNamesONI[cell]}</a></li>))}
        </ul>
    </>
}

export default EtapePage;