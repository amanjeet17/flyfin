import React from 'react'

const Dropdowns =(props)=>{

    return(
<div className="navbar">
  <div className="dropdown">
    <button className="dropbtn">Dropdown 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <div className="row">
        <div className="column">
          <h3>Language</h3>
        {
            props.languages.map((language,index)=>{
                return(
                    <a onClick={(e)=>props.changeLanguage(language)} key={index} >{language}</a>
                )
            })
        }
        </div>
        <div className="column">
          <h3>Price</h3>
          {
            props.currency.map((currency,index)=>{
                return(
                    <a onClick={(e)=>props.changeCurrency(currency)} key={index}>{currency}</a>
                )
            })
        }
        </div>
      </div>
    </div>
  </div> 
</div>
    )
}

export default Dropdowns;