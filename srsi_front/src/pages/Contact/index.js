import React, { useRef, useEffect } from 'react'
import './stylesheet.scss'
import TermBlink from '../../components/termblink'
import {Link} from 'react-router-dom'

const obfuscate = (name, domain, tld) => {
    return name + "@" + domain + "." + tld;
}

const obflink = (name, domain, tld) => {
    const mail = obfuscate(name, domain, tld);
    return <a href={`mailto:${mail}`}> {mail} </a> 
}

const ContactPage = props => {
    const adi = obfuscate("adrian.panaete", "gmail", "com");
    const oprita = obfuscate("opritapetru", "yahoo", "com");

    return <>
        <h2><TermBlink cps={50}>Contact</TermBlink></h2>

        <p>
            <b>Societatea pentru Excelență și Performanță în Informatică:</b> {obflink("contact", "sepi", "ro")}
        </p>
        <p>
            <b>Sediu:</b> Mun. Botoșani, str. Nicolae Iorga, nr. 19, jud. Botoșani
        </p>
        <p>
            <b>Conducerea:</b>
            <ul>
                <li><Link to="/membri/Adrian%20Panaete">Panaete Adrian</Link>, Președinte SEPI, Coordonator al Lotului Național de Seniori, {obflink("adrian.panaete","gmail", "com")}</li>
                <li><Link to="/membri/Marius%20Nicoli">Nicoli Marius</Link>, Coordonator al Loturilor Naționale, Coordonator OSEPI 2021, {obflink("mariusnicoli","gmail", "com")}</li>
                <li><Link to="/membri/Petru%20Simion%20Oprița">Oprița Petru Simion</Link>, Vicepreședinte SEPI, Coordonator Comisie Tehnică OSEPI 2021, {obflink("opritapetru","yahoo", "com")}</li>
            </ul>
        </p>
    </>
}

export default ContactPage;
