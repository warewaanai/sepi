import React, { useRef, useEffect } from 'react';
import './stylesheet.scss';
import {Link} from 'react-router-dom'

import DefaultAvatar from './defaultAvatar.png'

const PersonalCard = props => {
    const avatar = props.avatar ? props.avatar : DefaultAvatar;
    const name = props.name;
    const size = (props.small ? 'small' : 'large');

    console.assert(name);

    return (
        <Link to={"/membri/" + props.name} className="MemberLink">
            <div className="PersonalCard">
                <div className="AvatarContainer">
                    <img className="Avatar" alt={props.name} src={avatar} />
                </div>
                <div className="PersonalTldr">
                    {props.name ? <>  <h2><u> { props.name } </u></h2>  </> : null }
                    {props.institution ? <><span> { props.institution } </span> <br/> <br/> </> : null }
                    {props.role ? <><span> { props.role } </span> <br/> </> : null }
                </div>
            </div>
        </Link>
    );
}

export default PersonalCard;
