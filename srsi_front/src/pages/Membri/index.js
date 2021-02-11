import React, { useRef, useEffect, useState } from 'react';
import './stylesheet.scss';
import TermBlink from '../../components/termblink';
import PersonalCard from '../../components/personalcard';

const MembriPage = props => {
    const [members, setMembers] = useState(0);

    useEffect(() => {
        if (members === 0 || members === [])
            fetch(window.HOST + "/api/list_members").then(res => res.json()).then(res => setMembers(res));
        else
            console.log(members);
    });

    let membercards = [];
    for (const key in members) {
        const member = JSON.parse(members[key]);
        membercards.push(
            <PersonalCard
                key={key}
                avatar={window.HOST + member.avatar}
                name={member.name}
                institution={member.institution}
                role={member.role}
            />
        );

    }
    console.log(membercards);

    return (
        <>
            <h1> <TermBlink blink>Membrii SEPI</TermBlink> </h1>
            <div id="MemberTable">
                {membercards}
            </div>
        </>
    );
}

export default MembriPage;
