import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "Dummy",
        avatar_url:
          "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
      },
    };
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/Gurucaara");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    // console.log("ComponentDidUpdate()");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }
  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="User Photo" />
        <h2>Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h4>Contact : pururana24@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
