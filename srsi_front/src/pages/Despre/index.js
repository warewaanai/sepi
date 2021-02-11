import React, { useRef, useEffect } from 'react';
import './stylesheet.scss';

import Prezentare from './prezentare.js'
import Misiune from './misiune.js'
import Parteneri from './parteneri.js'


const DesprePage = props => {
    return <>
        <Prezentare />
        <Misiune />
        <br />
        <Parteneri />
    </>
}

export default DesprePage;
