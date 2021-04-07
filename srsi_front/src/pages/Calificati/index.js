import React , {useState} from 'react';
import TermBlink from '../../components/termblink';
import Scoreboard from '../../components/scoreboard';
import listCounties from '../../pages/Rezultate/listCounties.js';
import listLevels from '../../pages/Rezultate/listLevels.js';
const CalificatiPage = () =>{
    const [county, setCounty] = useState("general");
    const [level, setLevel] = useState("5");
    const [scoreboard, setScoreboard] = useState(<Scoreboard county={county} level="5" contest="qualified" indexed={2}/>);
    let counties = listCounties();
    counties["general"] = "Toate județele"
    const levels = listLevels(true);
    return <>
        <h1><TermBlink blink>Calificați la etapa națională</TermBlink></h1>
        <form onSubmit = {(event)=>{ setScoreboard(<Scoreboard county={county} level= {level} contest="qualified" indexed={2}/>); event.preventDefault()}}>
             <select value={county} onChange={(event)=>setCounty(event.target.value)}>
                 {Object.keys(counties).map( (county) => <option value={county}>{counties[county]}</option>)}
             </select>
             <select value={level} onChange={(event)=>setLevel(event.target.value)}>
                 {levels.map( (level) => <option value={level}>{level}</option>)}
             </select>
             <input type="submit" value="Filtrează" />
         </form>
         {scoreboard}
        <div>
             <b>Format PDF</b>
          <ul>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/5.pdf`}>Clasa a 5-a </a>
               </li>
               <li>
                     <a target="_blank" href={`${window.HOST}/static/qualified/6.pdf`}>Clasa a 6-a</a>
               </li>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/7.pdf`}>Clasa a 7-a</a>
               </li>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/8q.pdf`}>Clasa a 8-a</a>
               </li>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/9q.pdf`}>Clasa a 9-a </a>
               </li>
               <li>
                     <a target="_blank" href={`${window.HOST}/static/qualified/10q.pdf`}>Clasa a 10-a</a>
               </li>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/11q.pdf`}>Clasa a 11-a</a>
               </li>
               <li>
                    <a target="_blank" href={`${window.HOST}/static/qualified/12q.pdf`}>Clasa a 12-a</a>
               </li>
        </ul>
        </div>
    </>
}

export default CalificatiPage;