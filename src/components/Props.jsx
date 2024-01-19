import React, { Component } from 'react'

export default class Props2 extends Component {
  render() {
    return (
        <div>
      
        <h1>my name is {this.props.x.name}</h1>
        </div>
    
    )
  }
}