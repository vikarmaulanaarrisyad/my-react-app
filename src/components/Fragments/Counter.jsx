import React, { Component } from "react"

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
