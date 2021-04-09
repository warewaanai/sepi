import React from 'react';
import './stylesheet.scss';

const SponsorCard = props => {
    console.log(props);
    let containerType = "SponsorLogoContainer";
    return <div class="SponsorCard">
            <a class="SponsorLink" href={props.link}>
                <div class={containerType}>
                    <img style={{height:props.height}} src={props.logo}/>
                </div>
            <div class="SponsorName">
                {props.name}
            </div>
            </a>
        </div>
}

export default SponsorCard;