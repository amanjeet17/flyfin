import React, { Component } from 'react'
import PriceInfo from './price-range'
import OfferInfo from './offer-info';
import DateSelectorDropDown from './date-selector'
import Gurantee from './gurantee';

class Container extends Component {
    constructor(props){
        super(props);
        this.state={
            info:'Upto 5% Cashback',
            price:'139',
            list:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            selectedDate:''  
        }
    }

    updateSelection =(selection)=>{
        this.setState({selectedDate:selection})
    }

    checkAvailability =() =>{

        alert(`You have selected ${this.state.selectedDate}`)
    }
    render() {
        const {info , price, list } = this.state;
        return (
            <div>
                <div className="card" >
                    <div className="card-body">
                        <OfferInfo info={info}/>
                        <PriceInfo price={price} />
                        <DateSelectorDropDown list={list} updateSelection={this.updateSelection} />
                        <button className="check-availability" type="button" onClick={this.checkAvailability}>check availability</button>
                        <Gurantee />
                    </div>
                </div>
            </div>
        )
    }
}
export default Container;