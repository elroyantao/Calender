import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const renderComponentHelper = (Component, mountOptions = {}) =>  ({ children, ...props } = {}) => {
  const wrapper = shallow(
    <Component {...props}>{children}</Component>,
    mountOptions
  )
  return {
    wrapper,
    instance: wrapper.instance(),
    getTree: () => toJson(wrapper),
    getTreeFor: (selectedWrapper) => toJson(selectedWrapper)
  }
}

export default renderComponentHelper

