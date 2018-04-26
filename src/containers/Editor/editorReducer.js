// The initial state of the App
import { convertDateToObject } from '../../lib/date-helpers'

const today = convertDateToObject(new Date())

const initialState = {
  day: today
}

function addReminderReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_EDITOR_DATE':
      return {
        ...state,
        day: action.day
      }
    case 'OPEN_EDITOR':
      return {
        ...state,
        editorOpen: action.editorOpen
      }
    default:
      return state;
  }
}

export default addReminderReducer