import React, { useState, useEffect }  from 'react';
import TermBlink from '../../components/termblink';
import listNamedLevels from './listNamedLevels'
import './stylesheet.scss'
const EtapePage = props =>{
    const [levelLinks, setLevelLinks] = useState(0);
    const levelNames = listNamedLevels(true);

    useEffect(() => {fetch(window.HOST + "/api/round/oji").then(res => res.json()).then(res => setLevelLinks(res))}, [])

    return <>
        <h1> <TermBlink blink>Etape precedente</TermBlink> </h1>
        <h3>Etapa județeană</h3>
        <ul>
            {Object.keys(levelLinks).map(cell => (<li><a href ={levelLinks[cell]}>{levelNames[cell]}</a></li>))}
        </ul>
    </>
}

export default EtapePage;