import React, { useRef, useEffect } from 'react';

import TermBlink from '../../../components/termblink';
import './stylesheet.scss'

const InscriereOSEPI = props => {
    return <div>
        <h2><TermBlink>OSEPI - Înscriere</TermBlink></h2>

        <p>
            Înscrierea elevilor la OSEPI se face de către școli. Fiecare școală va transmite <a target="_blank" href={`${window.HOST}/static/formular_inscriere.xlsx`}>acest formular</a> completat cu elevii care doresc să participe la competiție. Formularul trebuie transmis pe adresa <a href="mailto:inscriere.scoli@sepi.ro">inscriere.scoli@sepi.ro</a> până cel târziu <b>vineri, 19 februarie 2021</b>.
        </p>

        <p>
            <b>Atenție:</b> Profesorul de la clasă și elevul sunt exclusiv responsabili de corectitudinea datelor.
        </p>

        <p>    
            Se recomandă ca fiecare școală să se încadreze în numărul total de participanți la etapa județeană din anul anterior. În cazul în care acest număr este semnificativ depășit și Societatea consideră că baza materială (serverele de concurs) nu poate susține numărul de participanți, școala va fi înștiințată pentru reducerea numărului de înscriși.
        </p>

        <p>
            Odată centralizate, aceste date vor fi trimise reprezentanților OSEPI din județe pentru verificare.
        </p>

        <p>
            Până cel târziu <b>luni, 22 februarie 2021</b>, lista elevilor înscriși va fi publicată pe site.
        </p>

        <p>
            Odată cu afișarea listelor, va fi anunțată o adresă de email unde pot fi semnalate eventualele probleme întâmpinate la înscriere iar reprezentanții SEPI își rezervă dreptul a înregistra în concurs și alți elevi în urma analizării solicitărilor primite.
        </p>

    </div>
}

export default InscriereOSEPI;
