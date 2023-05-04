import React from 'react';
import './scroll.css'

const scroll = (props) =>{
    return ( 
        < div className = "scroll">
            {props.children}
        </div>
    );
}

export default scroll;