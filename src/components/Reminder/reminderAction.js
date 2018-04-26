import { generateUniqueId } from '../../lib/utils'
import { getDayId, getTimeOrder } from '../../lib/date-helpers'
import { closeEditor } from '../../containers/Editor/editorAction'

export const addReminder = (day, message) => (dispatch) => {
  const reminderId = generateUniqueId()
  const dayId = getDayId(day)
  const order = getTimeOrder(day)
  const reminder = {
    reminderId,
    message,
    day,
    order
  }
  dispatch(saveReminder(reminder))
  dispatch(addReminderToDay(dayId, reminderId))
  dispatch(closeEditor())
}


export const saveReminder = ({reminderId, ...reminder}) => {
  return {
    type: 'SAVE_REMINDER',
    reminderId,
    reminder
  }
} 

export const addReminderToDay = (dayId, reminderId) => {
  return {
    type: 'LINK_REMINDER',
    dayId,
    reminderId
  }
}