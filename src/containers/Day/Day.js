import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { setEditorDate, openEditor } from '../Editor/editorAction'
import { getDaysReminders } from './daySelector'

import Reminder from '../../components/Reminder/Reminder'

if (process.browser) require('./Day.css')

class Day extends Component {
  static propTypes = {
    type: PropTypes.string,
    day: PropTypes.object,
    setEditorDate: PropTypes.func,
    openEditor: PropTypes.func
  }

  static defaultProps = {
    type: 'date'
  }

  handleAddReminder = () => {
    const { setEditorDate, day, openEditor } = this.props
    setEditorDate(day)
    openEditor()
  }

  render() {
    const { type, day, currentReminders } = this.props
    if (type === 'empty') return (<div className={'Day Day--empty'}></div>)
    return (
      <div className={`Day`}>
        <div className="Day-date">{day.date}</div>
        <div className="Day-addButton" onClick={this.handleAddReminder}>+</div>
        {!!currentReminders.length && (
          <div className="Day-reminders">
            {currentReminders.map(({ day: { hour, minute }, message }, i) => (
              <Reminder hour={hour} minute={minute} message={message} key={i}/>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default connect((state, ownProps) => ({
  currentReminders: getDaysReminders(state, ownProps.day.key)
}), { setEditorDate, openEditor })(Day)