import React , { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import Modal from 'react-modal'

import { closeEditor, setEditorDate } from './editorAction'
import { addReminder } from '../../components/Reminder/reminderAction'

if (process.browser) require('react-datetime/css/react-datetime.css')
if (process.browser) require('./Editor.css')


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    width                 : '80%',
    height                : '500px',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Editor extends Component {
  static propTypes = {
    setEditorDate: PropTypes.func,
    closeEditor: PropTypes.func,
    addReminder: PropTypes.func,
    editorOpen: PropTypes.bool,
    day: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      color: 'white'
    }
  }

  componentDidUpdate({ editorOpen: editorWasOpen }) {
    if (this.props.editorOpen !== editorWasOpen) {
      this.setState({ 
        message: '',
        color: 'white' 
      })
    }
  }

  handleChangeDate = (date) => {
    this.props.setEditorDate({
      date: date.date(),
      month: date.month(),
      year: date.year(),
      hour: date.hour(),
      minute: date.minute()
    })
  }

  handleMessageChange = (event) => {
    const message = event.target.value.substr(0, 60)
    this.setState({
      message
    })
  }

  handleColorChange = (event) => {
    this.setState({
      color: event.target.value
    })
  }

  handleSubmit = () => {
    const { addReminder, day } = this.props
    const { message, color } = this.state

    addReminder(day, message, color)
  }

  formatDay = () => {
    const { day: { date, month, year, hour = 0, minute = 0 } } = this.props

    return new Date(year, month, date, hour, minute)
  }

  render() {
    const { message, color } = this.state
    const { editorOpen, closeEditor } = this.props

    return (
      <Modal
          isOpen={editorOpen}
          onRequestClose={closeEditor}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
        >
        <div className="Editor">
          <textarea className="Editor-message" value={message} onChange={this.handleMessageChange}/>
          <Datetime
            className="Editor-dateTime"
            value={this.formatDay()} 
            onChange={this.handleChangeDate}
          />
          <select value={color} onChange={this.handleColorChange}>
            <option value="white">White</option>            
            <option value="cyan">Cyan</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
          </select>
          <div className="Editor-buttonRow">
            <button class="Editor-button" onClick={closeEditor}>Cancel</button>
            <button class="Editor-button" onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      </Modal>
    )
  }
}


export default connect((state) => ({
  editorOpen: state.editor.editorOpen,
  day: state.editor.day
}), { closeEditor, setEditorDate, addReminder })(Editor)