import React, { useRef, useEffect } from 'react'
import Card from '../../components/Card'
import TermBlink from '../../components/termblink'
import Carousel from '../../components/Carousel'

import './parteneri.scss'

import Infoarena from './infoarena.png'
import Pbinfo from './pbinfo.png'
import ACC from './acc.png'
import FII from './fii.png'
import SSMR from './ssmr.png'
import unibuc from './unibuc.jpg'
import universitaria from './universitaria.png'
import UVT from './uvt.jpg'
import upir from './upir.gif'
import univiasi from './univiasi.jpg'
import bolyai from './babes_bolyai.gif'
import revista_infobits from './revista_infobits.png'
import infobits_academy from './infobits_academy.png'
import upit from './upit.png'
import nerdvana from './nerdvana.png';

const PartenerCard = props => {
    return (
        <div className="PartenerCard">
            <a target="_blank" href={props.to}>
                <img src={props.src} alt="partener" />
            </a>
        </div>
    );
}

const Parteneri = props => {
    return <div className="Parteneri">
        <h1><TermBlink>Partenerii noștri</TermBlink></h1>

        <Carousel content={[
            [{link: "https://pbinfo.ro/", pic: Pbinfo}, {link: "http://upir.ro/index.php/ro/", pic: upir}, {link: "https://profs.info.uaic.ro/~consortiu/index.html", pic: universitaria}, {link: "https://www.infobits.ro/", pic: infobits_academy}, {link: "https://nerdvana.ro/", pic: nerdvana}],
            [{link: "https://infoarena.ro/", pic: Infoarena}, {link: "https://www.info.uaic.ro/", pic: FII}, {link: "https://www.uaic.ro/", pic: univiasi}, {link: "https://liceecentenare.ro/", pic: ACC}, {link: "https://www.upit.ro/ro/academia-reorganizata/facultatea-de-stiinte-educatie-fizica-si-informatica", pic: upit}],
            [{link: "https://rms.unibuc.ro/", pic: SSMR}, {link: "https://www.uvt.ro/ro/", pic: UVT}, {link: "https://unibuc.ro/", pic: unibuc}, {link: "https://www.ubbcluj.ro/ro/", pic: bolyai}, {link: "https://revista.infobits.ro/", pic: revista_infobits}]
        ]}/>
    </div>
};

export default Parteneri;
