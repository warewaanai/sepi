import resultID from './resultid'
import getResults from './getresults';
import { useState } from 'react';

/*
    Pentru probleme legate de format, vezi srsi_back/fetch_results.py
    Obtine rezultatele la un concurs (contest) de la o anumita clasa (level) si retureneaza o lista L de liste tip T
    L[0] - capul tabelului

    T[0] -> judet
    T[1] -> clasa
    T[2] -> nume
    T[3...] -> scor

*/
const fetchResults=  (contest, level) => {
    /*window.sessionStorage.setItem(resultID(contest, level), JSON.stringify({"head": ["Judet", "Clasa", "Nume", "P1", "P2", "P3"],
    "body": [["SJ", 10, "Bogdan", 100, 10, 50]]}));*/
    //window.sessionStorage.setItem(resultID(contest, level), JSON.stringify({"head": ["Judet", "Clasa", "Nume", "labirint", "tort", "sdistante", "matrice", "Global"], "body": [["GJ", "10", "Eugen Nodea", 100.0, 100.0, 0.0, 100.0, 300.0], ["GJ", "10", "Mihai Bunget", 0.0, 100.0, 100.0, 100.0, 300.0], ["DJ", "10", "Marius Nicoli", 100.0, 100.0, 0.0, 0.0, 200.0], ["GJ", "10", "Mihai Popescu", 100.0, 0.0, 0.0, 0.0, 100.0], ["NT", "10", "Stefan Dascalescu", 100.0, 0.0, 0.0, 0.0, 100.0], ["SJ", "10", "Bogdan Pop", 0.0, 0.0, 16.0, 0.0, 16.0], ["B", "10", "Gheorghe Manolache", 15.0, 0.0, 0.0, 0.0, 15.0], ["B", "10", "Costin Oncescu", 0.0, 0.0, 5.0, 0.0, 5.0], ["B", "10", "Tamio-Vesa Nakajima", 0.0, 0.0, 0.0, 0.0, 0.0], ["B", "10", "Lucian Bicsi", 0.0, 0.0, 0.0, 0.0, 0.0], ["B", "10", "Doru Popescu", 0.0, 0.0, 0.0, 0.0, 0.0], ["B", "10", "petru oprita", 0.0, 0.0, 0.0, 0.0, 0.0]]}));
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