import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Day from '../../containers/Day/Day'
import { getDaysInMonth } from '../../lib/date-helpers'
import { monthLabel } from '../../containers/MonthContainer/constants'
if (process.browser) require('./Month.css')

export default class Month extends Component {
  static propTypes = {
    selectedDay: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      days: this.generateDaysForMonth(),
      offsetDays: this.getOffsetDays()
    }
  }

  generateDaysForMonth = () => {
    const { selectedDay: { month, year } } = this.props
    const daysInMonth = getDaysInMonth(month, year)
    const days = []
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        month,
        monthLabel: monthLabel[month],
        year,
        hour: 0,
        minute: 0,
        key: `${i}-${month}-${year}`
      })
    }
    return days
  }

  getOffsetDays = () => {
    const { selectedDay: { month, year } } = this.props
    const firstDay = new Date(year, month, 1)
    const offsetDaysCount = firstDay.getDay()
    const days = []
    for (let i = 1; i <= offsetDaysCount; i++) {
      days.push({
        type: 'OFFSET',
        key: i
      })
    }
    return days
  }

  render() {
    const { days, offsetDays } = this.state
    return (
      <div className="Month">
        {offsetDays.map(({ key }) => (
          <Day key={key} type="empty"/>
        ))}
        {days.map((day) => (
          <Day key={day.key} id={day.key} day={day}/>
        ))}
      </div>
    )
  }
}