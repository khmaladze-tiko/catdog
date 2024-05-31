import React from "react";
import { Link } from "react-router-dom";

import catdoglogo from '../../Resources/images/logo/pet-icon.svg';


export const PetLogo = (props) => {
    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background: `url(${catdoglogo}) no-repeat`
        }}
    >

    </div>

    if(props.link){
        return (
            <Link className="link_logo" to={props.linkTo}>
                {template}
            </Link>
        )
    } else{
        return template
    }
}