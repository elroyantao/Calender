// The initial state of the App
import { convertDateToObject } from '../../lib/date-helpers'

const today = convertDateToObject(new Date())

const initialState = today

function selectedDateReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        ...action.day
      }
    default:
      return state;
  }
}

export default selectedDateReducer;