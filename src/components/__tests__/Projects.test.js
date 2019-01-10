import React from 'react'
import { shallow } from 'enzyme'
import Projects from '../Projects'

test('homepage renders correctly', () => {
  const wrapper = shallow(<Projects/>)
  expect(wrapper).toMatchSnapshot()
})
