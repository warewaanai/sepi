import React from 'react';
import TermBlink from '../../components/termblink';

const CalificatiPage = () =>{
    return <>
        <h1><TermBlink blink>Calificați etapa națională</TermBlink></h1>
        <ul>
           <li>
                <a target="_blank" href={`${window.HOST}/static/qualified/9.pdf`}>Clasa a 9-a </a>
           </li>
           <li>
                <a target="_blank" href={`${window.HOST}/static/qualified/10.pdf`}>Clasa a 10-a</a>
           </li>
           <li>
                <a target="_blank" href={`${window.HOST}/static/qualified/11.pdf`}>Clasa a 11-a</a>
           </li>
           <li>
                <a target="_blank" href={`${window.HOST}/static/qualified/12.pdf`}>Clasa a 12-a</a>
           </li>
        </ul>
    </>
}

export default CalificatiPage;