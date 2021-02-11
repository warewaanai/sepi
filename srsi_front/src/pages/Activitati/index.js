import React, { useRef, useEffect } from 'react';

import TermBlink from '../../components/termblink';
import './stylesheet.scss'


const InfoPro = props => 
    <div className="panel">
        <h2><TermBlink>InfoPro</TermBlink></h2>
        <p>
        Concursul a apărut din dorința comunității formate în jurul olimpiadelor și loturilor naționale de a sprijini elevii în condițiile dificile provocate de pandemie.
Anularea Olimpiadei Naționale în anul 2020 și apoi a tuturor etapelor pentru 2021 a avut un efect demobilizator în rândul elevilor români. Comunitatea din jurul Olimpiadelor a răspuns 
mai întâi prin organizarea selecției din vară în scopul formării echipelor care apoi ne-au reprezentat la competițiile internaționale. Efectul: 17 medalii (3 de aur, 8 de argine, 6 de bronz).
InfoPro s-a dorit a fi semnalul dat unei mai largi categorii de elevi pentru a le readuce încrederea că lucrurile nu stau pe loc la noi și că totul va fi bine. 

        </p>
    </div>


const OSEPI = props => 
    <div className="panel">
        <h2><TermBlink cps={40}>OSEPI - Olimpiada Societății pentru Excelență și Performanță în Informatică</TermBlink></h2>
        <p>
        Olimpiada Societății pentru Excelență și Performanță în Informatică
Competiția se dorește a suplini lipsa în acest an a etapelor Olimpiadei de Informatică și a Taberelor de Lot Național. Odată cu InfoPro s-a testat și o platformă online care să susțină
un concurs cu câteva sute de participanți simultan. Ne place să credem că avem infrastructură necesară pentru a ne adresa unui număr mare de elevi care să participe la diverse etape de
selecție (județeană, națională, de alegere a loturilor reprezentative). Olimpiada se va desfășura în mai multe etape în perioada martie-mai 2021.
        </p>
    </div>

const Activitati = props => {
    return (
        <div id="Activitati">
            <InfoPro />
            <OSEPI />                
        </div>
    );  
}

export default Activitati;
