import React from 'react';
import './stylesheet.scss';

const SponsorCard = props => {
    console.log(props);
    let containerType = "SponsorLogoContainer";
    if(props.horizontal)
        containerType = "SponsorHorizontalLogoContainer";
    return <a class="SponsorLink" href={props.link}>
        <div class="SponsorCard">
                <div class={containerType}>
                    <img style={{height:props.height}} src={props.logo}/>
                </div>
            <div class="SponsorName">
                {props.name}
            </div>
        </div>
    </a>
}

export default SponsorCard;