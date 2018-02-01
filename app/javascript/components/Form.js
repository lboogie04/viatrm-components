import React from "react"
import PropTypes from "prop-types"
class Form extends React.Component {
   constructor(props) {
   super(props);
    this.state = {
     country: this.props.countries[0].code
    }
   }
 
  populateCountries = (countries) => {
   return countries.map((country, index) => (
    <option key={index} value={country.code}>{country.code} - {country.name}</option>
  ));
  }
 
  populateStates = (states) => {
   return states.map((state, index) => (
    <option key={index} value={state}>{state}</option>
  ));
  }
 
  onCountryChange = (event) => {
    this.setState({ country: event.target.value })
    console.log(event.target.value)
  }
  
  renderDropdownForStates = (country) => {
   if (country == "US") {
      return (
        <div className="uk-margin">
        <select className="uk-select">
          {this.populateStates(this.props.states)}
        </select>
        </div>
      )
    } else {
      return (
        <div className="uk-margin">
        <label className="uk-form-label">State</label>
         <input className="uk-input" type="text" placeholder="State" />
        </div>
      )
    }

  }
 
  render () {
    return(
     <form>
       <label className="uk-form-label">Country</label>
       <select 
         className="uk-select" 
         value={this.state.country}
         onChange={this.onCountryChange}
         >
          {this.populateCountries(this.props.countries)}
       </select>
      <div className="uk-margin">
        <label className="uk-form-label">City</label>
         <input className="uk-input" type="text" placeholder="City" />
        </div>
      {this.renderDropdownForStates(this.state.country)}
      <div className="uk-margin">
        <label className="uk-form-label">Address</label>
         <input className="uk-input" type="text" placeholder="Address" />
      </div>
      <div className="uk-margin">
        <label className="uk-form-label">Address 2</label>
         <input className="uk-input" type="text" placeholder="Address 2" />
      </div>
    </form>
    );
  }
}

export default Form
