import React, { useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './stylesheet.scss';

import Prezentare from './prezentare.js'
import Misiune from './misiune.js'
import Parteneri from './parteneri.js'

import warning from './warning.png'

const DesprePage = props => {
    return <>
        <Prezentare />
        <Misiune />
        <br />
        <div style={{margin: "0 auto", textAlign: "center", border: "solid", width: "max-content", padding: "4px"}}>
            <Link to="/osepi" style={{color: "black", textDecoration: "none"}}>
                <img src={warning} alt="warningsign" width="32px" style={{display: "inline"}}/>
                <span style={{fontSize: "32px", fontWeight: "bold"}}>Vezi ultimele anunțuri</span>
            </Link>
        </div>
        <br/>
        <Parteneri />
    </>
}

export default DesprePage;
