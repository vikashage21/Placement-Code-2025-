import React from "react";

class LifeCycleReact extends React.Component {
  constructor(props) {
      super(props);
      console.log("constructor called");

    // creating a state

    this.state = {
      users: {
        firstName :"vikash"
       },
    };
  }

  async componentDidMount() {
    console.log("mounting phase ");
    // calling api here

    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    console.log(json.users[0]);

    this.setState({
      users: json.users[0],
    })
  }

  componentWillUnmount() {
    console.log("unMounting phase");
  }
  render() {
    console.log("render ");

    const { users } = this.state;
    console.log(users.firstName)

    return (
      <>
        <div>
          <p>life cycle of react</p>
          <p>this firstname of user is {users.firstName}</p>
        </div>
      </>
    );
  }
}

export default LifeCycleReact;
