import React from 'react';
import offerimg from '../pic1.PNG';
import questionmark from '../pic2.PNG';

const OfferInfo =(props) =>{
    return(
        <React.Fragment>
            <div className="offer-info">
            <img src={offerimg} alt="offer img"  width="30" height="30"/>
            <span>{props.info}</span>
            <img className="question-mark" src={questionmark} alt="offer img"  width="30" height="30"/>
            </div>
            <hr className='line'/>
        </React.Fragment>
    )
}

export default OfferInfo;