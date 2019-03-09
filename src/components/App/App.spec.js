import React from 'react'
import App from './App'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test(`Smoke test`, () => {
  const app = shallow(
    <App /> 
  )
  expect(app)
})

