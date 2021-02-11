import React, { useRef, useEffect } from 'react';
import TermBlink from '../../components/termblink'
import {Link} from 'react-router-dom'

const Misiune = props => {
    return <div id="misiune">
        <h1><TermBlink>Proiectele Noastre</TermBlink></h1>
        <span style={{fontSize: "16px"}}>
            <ul>
                <li>
                    <h3><Link to="/osepi" style={{textDecoration: 'none', color: 'black'}}>OSEPI - Olimpiada Societății pentru Excelență și Performanță în Informatică</Link></h3>
                    <p>
                        Competiția se dorește a suplini lipsa în acest an a etapelor Olimpiadei de Informatică și a Taberelor de Lot Național. Odată cu InfoPro s-a testat și o platformă online care să susțină un concurs cu câteva sute de participanți simultan. Ne place să credem că avem infrastructura necesară pentru a ne adresa unui număr mare de elevi care să participe la diverse etape de selecție (județeană, națională, de alegere a loturilor reprezentative). Olimpiada se va desfășura în mai multe etape în perioada martie-aprilie 2021.
                    </p>
                </li>
                
                <li>
                    <h3><a href="https://infopro.lrmd.ro/" target="_blank" style={{textDecoration: 'none', color: 'black'}}>InfoPro</a></h3>
                    <p>
                       Concursul a apărut din dorința comunității formate în jurul olimpiadelor și loturilor naționale de a sprijini elevii în condițiile dificile provocate de pandemie. Anularea Olimpiadei Naționale în anul 2020 și apoi a tuturor etapelor pentru 2021 a avut un efect demobilizator în rândul elevilor români. Comunitatea din jurul Olimpiadelor a răspuns mai întâi prin organizarea selecției din vară în scopul formării echipelor care apoi ne-au reprezentat la competițiile internaționale. Efectul: 17 medalii (3 de aur, 8 de argint și 6 de bronz). InfoPro s-a dorit a fi semnalul dat unei mai largi categorii de elevi pentru a le readuce încrederea că lucrurile nu stau pe loc la noi și că totul va fi bine.
                    </p>
                </li>
            </ul>
        </span>
    </div>
};

export default Misiune;
