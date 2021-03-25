import React, { useState, useEffect }  from 'react';
import SponsorCard from '../../components/sponsorcard';
import TermBlink from '../../components/termblink';

const SponsorsPage = props =>{
    const [sponsors, setSponsors] = useState()
    useEffect(() => {fetch(window.HOST + "/api/list_sponsors").then(res => res.json()).then(res => setSponsors(res))}, [])
    let sponsorcards = [];
    for (const key in sponsors) {
        const sponsor = JSON.parse(sponsors[key]);
        console.log(sponsor);
        sponsorcards.push(
            <SponsorCard
                name={key}
                logo={window.HOST + sponsor.logo}
                link={sponsor.link}
            />
        );

    }
    return <>
        <h1> <TermBlink blink>Sponsorii SEPI</TermBlink> </h1>
        <div id="SponsorTable">
            {sponsorcards}
        </div>
    </>
}

export default SponsorsPage;