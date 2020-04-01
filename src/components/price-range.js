import React from 'react';

const PriceInfo = (props) =>{
    return(
        <React.Fragment>
            <div className="price-info">
                <div className="from">from</div>
                <div className="price"><span>&#163;</span> {props.price}</div>
            </div>
        </React.Fragment>
    )
}

export default PriceInfo;