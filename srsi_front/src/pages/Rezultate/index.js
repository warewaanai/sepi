import React, { useState }  from 'react';
import {Link} from 'react-router-dom';
import './stylesheet.scss';
import TermBlink from '../../components/termblink';
import Scoreboard from '../../components/scoreboard';
import listCounties from './listCounties';
import listContests from './listContests';
import listLevels from './listLevels';
const RezultatePage = props =>{
    const [contest, setContest] = useState("OJI");
    const [county, setCounty] = useState("general");
    const [level, setLevel] = useState("10");
    const [scoreboard, setScoreboard] = useState(<Scoreboard county={county} level="10" contest="OJI" />);
    const counties = listCounties();
    const contests = listContests();
    const levels = listLevels();
    //console.log(county);
    //console.log(scoreboard);
    return <div>
         <h1> <TermBlink blink>Rezultate OSEPI</TermBlink> </h1>
         <form onSubmit = {(event)=>{ setScoreboard(<Scoreboard county={county} level= {level} contest="OJI" />); event.preventDefault()}}>
             <select value={contest} onChange={(event)=>setContest(event.target.value)}>
                 {Object.keys(contests).map( (contest) => <option value={contest}>{contests[contest]}</option>)}
             </select>
             <select value={county} onChange={(event)=>setCounty(event.target.value)}>
                 {Object.keys(counties).map( (county) => <option value={county}>{counties[county]}</option>)}
             </select>
             <select value={level} onChange={(event)=>setLevel(event.target.value)}>
                 {levels.map( (level) => <option value={level}>{level}</option>)}
             </select>
             <input type="submit" value="Filtrează" />
         </form>
         {scoreboard}
         <p>Rezultatele sunt provizorii (înainte de analiza materialelor video). Apar numai concurenții care au fost prezenți și au obținut puncte.</p>
    </div>
    
}

export default RezultatePage;