import React from 'react'
import { shallow } from 'enzyme'
import Blog from '../Blog'

test('homepage renders correctly', () => {
  const wrapper = shallow(<Blog/>)
  expect(wrapper).toMatchSnapshot()
})
