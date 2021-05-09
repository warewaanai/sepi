import React, { useState, useEffect }  from 'react';
import TermBlink from '../../components/termblink';
import './stylesheet.scss';
import listExtendedCounties from './listExtendedCounties';
const DistinctiiOJIPage = props =>{
    const countyNamesOJI = listExtendedCounties();

    return <>
        <h1> <TermBlink blink>Distincții etapa județeană OSEPI</TermBlink> </h1>
        <div id="awardListContainer">
            <ul id="awardList">
                {Object.keys(countyNamesOJI).map(cell => (<li><a href ={`${window.HOST}/static/awards/oji/`+ cell + `.pdf`}>{countyNamesOJI[cell]}</a></li>))}
            </ul>
        </div>
    </>
}

export default DistinctiiOJIPage;