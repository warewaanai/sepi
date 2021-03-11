import resultID from './resultid'
import getResults from './getresults';
import { useState } from 'react';

const fetchResults=  (contest, level) => {
   
    return fetch(window.HOST + "/api/results/" + contest + "/" + level).then(res => res.json()).
    catch(error => console.error(error));//return []?
    /*then(txt => {
        console.log(txt);
        window.sessionStorage.setItem(
        resultID(contest, level), 
        txt
        );
        console.log(window.sessionStorage.getItem(
            resultID(contest, level)));
        return txt;
    }
    ).*/
}

export default fetchResults;