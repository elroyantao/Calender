import testComponentHelper from '../../lib/test-helper'

import App from './App'

describe('App', () => {
  const renderComponent = testComponentHelper(App)
  describe('@renders', () => {
    it('in default state', () => {
      const { getTree } = renderComponent()
      expect(getTree()).toMatchSnapshot()
    })
  })
})