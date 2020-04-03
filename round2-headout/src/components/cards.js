import React from 'react'
import Card from './card'

const Cards = (props) => {
    return (
        <div className="container">
            {
                props.eventsOrganised[`${props.selectedLanguage}`].map((event, index) => {
                    return <Card details={event}
                        convertedCurrency={props.convertedCurrency}
                        index={index}
                    />
                })
            }
        </div>

    )
}

export default Cards;
