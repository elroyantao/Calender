import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Month from '../../components/Month/Month'
import MonthHeader from '../../components/MonthHeader/MonthHeader'

class MonthContainer extends Component {
  static propsTypes = {
    selectedDay: PropTypes.object
  }

  render() {
    const { selectedDay } = this.props
    return (
      <div className="MonthContainer">
        <MonthHeader selectedDay={selectedDay}/>      
        <Month selectedDay={selectedDay}/>
      </div>
    )
  }
}

export default connect((state) => ({
  selectedDay: state.selectedDay.date
}))(MonthContainer)