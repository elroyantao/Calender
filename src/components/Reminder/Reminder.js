import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

if (process.browser) require('./Reminder.css')

export default class Reminder extends Component {
  static propTypes = {
    hour: PropTypes.number,
    minute: PropTypes.number,
    message: PropTypes.string    
  }
  render() {
    const { hour, minute, message } = this.props
    return (
      <div className="Reminder">
        <span className="Reminder-time">{moment({ hour, minute }).format('hh.mm a')}</span>
        <span className="Reminder-message">{message}</span>                
      </div>
    )
  }
}

