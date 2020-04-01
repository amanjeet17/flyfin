import React from 'react';
import pic from '../100.PNG';

const Gurantee = (props) => {
    const myStyle = {
        justifyContent: "center"
    }
    return (
        <React.Fragment>
            <div className="divider">
                <span className="right-half-circle"></span>
                <hr />
                <span className="left-half-circle"></span>
            </div>
            <div className="gurantee" style={myStyle}>
                <img src={pic} alt="100" />
                <span>best price gutanteed</span>
            </div>
        </React.Fragment>
    )
}

export default Gurantee