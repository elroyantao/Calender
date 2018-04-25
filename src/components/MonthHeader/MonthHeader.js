import React, { Component } from 'react'
import PropTypes from 'prop-types'

if (process.browser) require('./MonthHeader.css')

export default class MonthHeader extends Component {
   static propTypes = {
    selectedDay: PropTypes.object.isRequired
  }

  render() {
    const { selectedDay: {year, monthLabel } } = this.props
    return (
      <div className="MonthHeader">
        <div className="MonthHeader-title">{`${monthLabel} ${year}`}</div>
        <div className="MonthHeader-week">
          <div className="MonthHeader-weekday">Sun</div>
          <div className="MonthHeader-weekday">Mon</div>
          <div className="MonthHeader-weekday">Tue</div>
          <div className="MonthHeader-weekday">Wed</div>
          <div className="MonthHeader-weekday">Thu</div>
          <div className="MonthHeader-weekday">Fri</div>
          <div className="MonthHeader-weekday">Sat</div>          
        </div>
      </div>
    )
  }
}