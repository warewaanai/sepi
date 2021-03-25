import React from 'react';
import './stylesheet.scss';

const SponsorCard = props => {
    console.log(props);
    return <a class="SponsorLink" href={props.link}>
        <div>
            <div class="SponsorLogoContainer">
                <img class="SponsorLogo" src={props.logo}/>
            </div>
            <div class="SponsorName">
                {props.name}
            </div>
        </div>
    </a>
}

export default SponsorCard;