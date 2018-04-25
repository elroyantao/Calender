import React, { Component } from 'react'
import PropTypes from 'prop-types'

if (process.browser) require('./Day.css')

class Day extends Component {
  static propTypes = {
    className: PropTypes.string,
    date: PropTypes.number
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, date } = this.props
    return (
      <div className={`Day ${className}`}>
        {date && <div className="Day-date">{date}</div>}
      </div>
    )
  }
}

export default Day