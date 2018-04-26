// The initial state of the App
import { convertDateToObject } from '../../lib/date-helpers'

const initialState = {
  reminderList: {},
  reminderDays: {}
}

function reminderReducer(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_REMINDER':
      return {
        ...state,
        reminderList: {
          ...state.reminderList,
          [action.reminderId]: action.reminder
        } 
      }
    case 'DELETE_REMINDER':
      return {
        ...state,
        reminderList: {
          ...state.reminderList,
          [action.reminderId]: undefined
        } 
      }
    case 'LINK_REMINDER': 
      return {
        ...state,
        reminderDays: {
          ...state.reminderDays,
          [action.dayId] : [ ...(state.reminderDays[action.dayId] || []), action.reminderId]
        }
      }
    default:
      return state;
  }
}

export default reminderReducer