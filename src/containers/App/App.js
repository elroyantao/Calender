import React, { Component } from 'react'

import MonthContainer from '../MonthContainer/MonthContainer'
import Editor from '../Editor/Editor'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MonthContainer />
        <Editor />
      </div>
    )
  }
}

