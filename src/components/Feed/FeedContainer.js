import React from 'react'

class FeedContainer extends React.Component {

  render() {
    const { children } = this.props

    return(
      <div>{children}</div> 
    )
  }
}

export default FeedContainer

