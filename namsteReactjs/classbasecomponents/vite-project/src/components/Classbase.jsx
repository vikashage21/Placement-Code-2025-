import React from "react";

//  creating a class base components

class UserClass extends React.Component {
  // for getting props we use constructor

  constructor(props) {
    super(props);

    // to create state in class base component we use

    this.state = {
      count: 0,
      count2: 0,
    };

    console.log(props);
  }
  render() {
    let { name, value } = this.props;
    let { count, count2 } = this.state;
    return (
      <div className="user-card">
        class base
        <p> 
          {name} : {value} : {count} : {count2}
        </p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          click
        </button>
      </div>
    );
  }
}

export default UserClass;
