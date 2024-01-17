import React, { Component } from 'react'

export default class lifecycle extends Component {
constructor(){
    super();
    this.state={
        count:0
    }

}
componentDidMount()
{
    console.log("component functin");
}
increment(){
    this.setState({count:this.state.count+1})
}
    render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment.bind(this)}>click on me</button>
    
        </div>
    )
  }
}
