import React from 'react';
import { useHistory } from "react-router-dom";
import './../../scss/Card.scss';

const Card = (props) => {
    
    const history = useHistory();

    const viewProduct = (id) => {
        history.push(`/items/${id}`)
    }

    return (
        <div className='card' onClick={() => { viewProduct(props.id) }}>
            <img className='picture' src={props.picture} alt='pic'/>
            <div className='detail'>
                <span className='price'>{props.price}</span>
                <h1 className='titleProduct'>{props.title}</h1>
                <span className='location'>{props.location}</span>
            </div>
        </div>
    )
}

export default Card;