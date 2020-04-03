import React, { Component } from 'react';
import './App.scss';
import Cards from './components/cards';
import Dropdowns from './components/dropdowns'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "USD",
      language: "FRENCH",
      supportedCurrency: ['USD', 'INR', 'SGD'],
      supportedLanguages: ['ENGLISH', 'FRENCH', 'HINDI'],
      events: {
        ENGLISH: [{ name: "event 1", description: "This is event 1 for morning", price: '$21' },
        { name: "event 2", description: "This is event 2 for evening", price: '$234' },
        { name: "event 3", description: "This is event 3 for night", price: '$23' }],
        FRENCH: [{ name: "événement 1", description: "Ceci est l'événement 1 pour le matin", price: '$21' },
        { name: "événement 2", description: "Ceci est l'événement 2 pour la soirée", price: '$234' },
        { name: "événement   3", description: "C'est l'événement 3 pour la nuit", price: '$23' }],
        HINDI: [{ name: "घटना 1", description: "यह सुबह के लिए 1 घटना है", price: '$21' },
        { name: "घटना 2", description: "यह शाम के लिए 2 घटना है", price: '$234' },
        { name: "घटना 3", description: "यह रात के लिए घटना 3 है", price: '$23' }]
      },
      convertedCurrency: []
    }
  }

  changeLanguage = (language) => {
    if(this.state.language!==language){
      this.setState({ language })
    }
  }

  changeCurrency = (currency) => {
    if(this.state.currency=== currency){
      return
    }
    let data = this.state.events['ENGLISH'].slice();
    let convertedCurrency = [];
    switch (currency) {
      case "INR":
        convertedCurrency = data.map((el) => {
          return 'Rs.'+Math.floor(parseInt(el.price.split('$')[1]) * 76);
        })
        break;
      case "SGD":
        convertedCurrency = data.map((el) => {
          return 'S$'+Math.floor(parseInt(el.price.split('$')[1]) * 1.43);
        })
        break;
      default:
        convertedCurrency = []
    }
    this.setState({ convertedCurrency, currency })
  }
  render() {
    const { events, supportedLanguages, supportedCurrency, language, convertedCurrency } = this.state
    return (
      <div>
        <Dropdowns languages={supportedLanguages}
          currency={supportedCurrency}
          changeLanguage={this.changeLanguage}
          changeCurrency={this.changeCurrency} />
        <Cards eventsOrganised={events}
          selectedLanguage={language}
          convertedCurrency={convertedCurrency}
        />
      </div>
    );
  }
}

export default App;
