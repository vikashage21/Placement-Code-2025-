import React, { Component } from "react";

export default class ClassBase extends Component {
  constructor(props) {
    // accessing props in constructor
    super(props);
    // creating state in class components

    this.state = {
      emp: {
        eName: "vikash",
      },
     count:0
    };
    this.handelCount = this.handelCount.bind(this)
  }
// handel count

handelCount() {
    this.setState((state) =>{
        return {
            count :state.count + 1
        }
    })

}

  render() {
    return (
      <div>
        <h1>{this.props.sName}</h1>
        <h1>{this.state.emp.eName}</h1>
        <button onClick={this.handelCount}>count {this.state.count}</button>
      </div>
    );
  }
}
