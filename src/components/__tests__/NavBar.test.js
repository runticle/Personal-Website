import React from 'react'
import { shallow } from 'enzyme'
import NavBar from '../NavBar'

test('homepage renders correctly', () => {
  const wrapper = shallow(<NavBar/>)
  expect(wrapper).toMatchSnapshot()
})
