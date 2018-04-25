import testComponentHelper from '../../lib/test-helper'
import Month from './Month'

describe('<Month />', () => {
  const renderComponent = testComponentHelper(Month)
  describe('@render', () => {
    it('correct number of days for April 2018', () => {
      const { wrapper } = renderComponent({
        selectedDay: {
          date: 15,
          month: 3,
          year: 2018
        }
      })
      expect(wrapper.find('Day[className="Day--empty"]').length).toBe(0)      
      expect(wrapper.find('Day').not('[className="Day--empty"]').length).toBe(30)
    })
    it('correct number of days for February 2018', () => {
      const { wrapper, getTree } = renderComponent({
        selectedDay: {
          date: 15,
          month: 1,
          year: 2018
        }
      })
      expect(wrapper.find('Day[className="Day--empty"]').length).toBe(4)
      expect(wrapper.find('Day').not('[className="Day--empty"]').length).toBe(28)
    })
    it('correct number of days for August 2020', () => {
      const { wrapper } = renderComponent({
        selectedDay: {
          date: 15,
          month: 7,
          year: 2020
        }
      })
      expect(wrapper.find('Day[className="Day--empty"]').length).toBe(6)      
      expect(wrapper.find('Day').not('[className="Day--empty"]').length).toBe(31)
    })
    it('correct number of days for February 2020', () => {
      const { wrapper } = renderComponent({
        selectedDay: {
          date: 15,
          month: 1,
          year: 2020
        }
      })
      expect(wrapper.find('Day[className="Day--empty"]').length).toBe(6)      
      expect(wrapper.find('Day').not('[className="Day--empty"]').length).toBe(29)
    })
  })
})