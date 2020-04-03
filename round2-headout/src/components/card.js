import React from 'react';
import logo from '../logo.svg'
const Card = (props) => {
    const myStyle = {
        float: "right"
    }

    return (
        <div className='card'>
            <div className='card-body'>
                <img src={logo} alt="img" />
                <p>{props.details.name}
                    <span style={myStyle}>
                        {
                            props.convertedCurrency.length === 0 ?
                                props.details.price :
                                props.convertedCurrency[props.index]
                        }
                    </span></p>
                <p>{props.details.description}</p>
            </div>
        </div>
    )
}

export default Card;