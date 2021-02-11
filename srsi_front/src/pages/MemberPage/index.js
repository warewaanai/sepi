import React, { useRef, useEffect, useState } from 'react';
import './stylesheet.scss';
import TermBlink from '../../components/termblink';
import JsxParser from 'react-jsx-parser';
import {Link} from 'react-router-dom';
import Card from '../../components/Card'


const MemberPage = props => {
    const [content, setContent] = useState(0);
    const [meta, setMeta] = useState(1);
    const memberName = props.match.params.name;

    useEffect(() => {
        if (content === 0)
            fetch(window.HOST + "/api/content_member/" + memberName).then(res => res.json()).then(res => setContent(res.text));
        if (meta === 1)
            fetch(window.HOST + "/api/meta_member/" + memberName).then(res => res.json()).then(res => setMeta(res));
    });

    console.log(meta);

    return <>
        <h2><TermBlink>{memberName}</TermBlink></h2>
        <div>
            <Card float="right" width="360px" external pic={window.HOST + meta.mainpic}/>

            <JsxParser
                disableKeyGeneration={false}
                components={{
                    Card,
                    Link,
                }}
                jsx={` ${content} `}/>
        </div>
        <br />
        <Link to="/membri">Lista tuturor membrilor</Link>
    </>
}

export default MemberPage;
