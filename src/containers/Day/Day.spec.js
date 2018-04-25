import testComponentHelper from '../../lib/test-helper'
import Day from './Day'

describe('<Day />', () => {
  const renderComponent = testComponentHelper(Day)
  describe('@renders', () => {
    it('in default state',() => {
      expect(renderComponent().getTree()).toMatchSnapshot()
    })
    it('with classname', () => {
      expect(renderComponent({
        className: 'mock-class'
      }).getTree())
        .toMatchSnapshot()
    })
    it('with date', () => {
      expect(renderComponent({
        date: 14
      }).getTree())
        .toMatchSnapshot()
    })
  })
})