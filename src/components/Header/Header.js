import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation/Navigation'

const HeaderContainer = styled.div`
  background: #EEC2FF 
`

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Navigation /> 
      </HeaderContainer> 
    )
  }
}

export default Header

