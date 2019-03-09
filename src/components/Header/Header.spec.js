import React from 'react'
import Header from './Header'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test(`Smoke test`, () => {
  const header = shallow(
    <Header /> 
  )
  expect(header)
})

