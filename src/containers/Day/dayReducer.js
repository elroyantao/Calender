// The initial state of the App
import { convertDateToObject } from '../../lib/date-helpers'

const today = convertDateToObject(new Date())

const initialState = {
  date: today
}

function selectedDateReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        ...action.date
      }
    default:
      return state;
  }
}

export default selectedDateReducer;