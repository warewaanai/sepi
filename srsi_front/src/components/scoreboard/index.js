import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom'
import getResults from './Utilities/getresults'
import './stylesheet.scss';

const Scoreboard = props => {
    console.log(props)
    const [resultsTable, setResultsTable]  = useState(0);
    const resultsIndex = props.indexed ? props.indexed : 1;
    useEffect(() => {
        getResults(props.contest, props.level, props.county, resultsIndex).then(content => setResultsTable(content))
    },
    [props]);
    //console.log(resultsTable);
    if(resultsTable == 0) return <p>empty</p>;
    return <table id="scoreboard" style={{width: "100%"}}>
        <tr>
            {resultsTable["head"].map(cell => (<th>{cell}</th>))}
        </tr>
        {
            resultsTable["body"].map( entry =>
                (<tr>{entry.map(cell => (<td>{cell}</td>))}</tr>)
            )
        }
    </table>
}

export default Scoreboard;