import React from 'react';
import TermBlink from '../../components/termblink';

const CalificatiPage = () =>{
    return <>
        <h1><TermBlink blink>Calificați la etapa națională</TermBlink></h1>
        <ul>
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
    </>
}

export default CalificatiPage;