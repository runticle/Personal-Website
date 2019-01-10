import React from 'react'
import { shallow } from 'enzyme'
import Contact from '../Contact'

test('homepage renders correctly', () => {
  const wrapper = shallow(<Contact/>)
  expect(wrapper).toMatchSnapshot()
})
