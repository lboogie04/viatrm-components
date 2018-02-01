import React from "react"
import PropTypes from "prop-types"
import moment from "moment"
class Calendar extends React.Component {
  constructor(props) {
   super(props);
   this.setMonth = this.setMonth.bind(this);
   this.state = {
    start: null,
    end: null
   }
  }
 
  parseDate(date) {
   console.log(moment(date, "YYYYM")) 
   return moment(date, "YYYYM")
  }
 
  setMonth(month) {
   let momentMonth = this.parseDate(month)
   const { start, end } = this.state
   
   if (start == null) {
      this.setState({ start: momentMonth })
      return
    } else if (end == null) {
      if (momentMonth < start) {
        this.setState(
          { start: momentMonth, end: start }
        )
        return
      }
      this.setState({ end: momentMonth })
      return
    } else if (start && end) {
      if (momentMonth.isSame(end)) {
        this.setState({ start: null, end: null })
        return
      }
      this.setState({ start: momentMonth, end: null })
      return
    } else if (momentMonth < end) {
      this.setState({ start: momentMonth, end: start })
      return
    }

  }
 
  highlighted(month) {
   const startMon = this.state.start ? moment(this.state.start) : null
   const endMon = this.state.end ? moment(this.state.end) : null
   if (!startMon || !endMon) {
     return false
   }
   
   const currMonth = moment(month, "YYYYM")
   
   if (currMonth > startMon && currMon < endMon) {
      return true
    }
   return false
  }
 
  selected(month) {
   const startMonth = this.state.start ? moment(this.state.start).format("YYYYMM") : null
   const endMonth = this.state.end ? moment(this.state.end).format("YYYYMM") : null
   const currentMonth = moment(month, "YYYYM").format("YYYYMM")

   if ([endMonth, startMonth].includes(currentMonth)) {
      return true
   }
    return false
  }
  
  renderMonths(year) {
   let setMonth = this.setMonth
   return this.props.months.map ((month, index) => {
     let currMonth = `${year}${index + 1}`
     let highlight = this.highlighted(currMonth) ? "highlight" : ""
     let select = this.selected(currMonth) ? "select" : ""
     return (
        <button 
          className={`uk-button uk-button-default ${highlight} ${select}` }
          onClick={() => setMonth(currMonth)}>
          {month}
       </button>
     )
    });
  }
 
  renderYears(years) {
     return years.map((year) => {
     return (
      <div>
       <p>{year}</p>
       <div>{this.renderMonths(year)}</div>
      </div>
     )
    })
  }

 
  render () {

    return(
     <div>
        <span className="title">Travel Term</span>
        <span className="uk-margin-small-right uk-icon" uk-icon="icon: plus"></span>
        {this.renderYears(this.props.years)}
      </div>
    );
  }
}


export default Calendar
