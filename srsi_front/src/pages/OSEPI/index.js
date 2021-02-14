import React, { useRef, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import JsxParser from 'react-jsx-parser';

import TermBlink from '../../components/termblink';
import Card from '../../components/Card';
import './stylesheet.scss'

const Announcement = props => {
    const title = `${props.date} - ${props.title}:`;

    return <>
            <h3><TermBlink>{title}</TermBlink></h3>
            <JsxParser
                disableKeyGeneration={false}
                components={{
                    Card,
                    Link,
                }}
                jsx={props.content}/>

            <br />
            <hr />
            <br />
    </>;
}

const OSEPI = props => {
    const [announcements, setAnnouncements] = useState(0);

    useEffect(() => {
        if (announcements === 0 || announcements === [])
            fetch(window.HOST + "/api/list_announcements").then(res => res.json()).then(res => setAnnouncements(res));
        else
            console.log(announcements);
    });

    let announcementArticles = [];
    if (announcements !== 0 && announcements !== []) {
        for (const key in announcements) {
            announcementArticles.push(<Announcement {...announcements[key]} />);
        }
        announcementArticles.reverse();
    }

    return <div id="osepi">
        <h2> <TermBlink>OSEPI - Anunțuri</TermBlink> </h2>
        {announcementArticles}
        <br />
    </div>;
}

export default OSEPI;
