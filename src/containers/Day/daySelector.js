import { createSelector } from 'reselect'

const getReminderIds = (state, key) => state.reminder.reminderDays[key]
const getReminders = (state) => state.reminder.reminderList

export const getDaysReminders = createSelector(
  [ getReminderIds, getReminders ],
  (reminderIds = [], reminders) => reminderIds.map((reminderId) => reminders[reminderId])
    .sort((reminderA, reminderB) => reminderA.order - reminderB.order)
)