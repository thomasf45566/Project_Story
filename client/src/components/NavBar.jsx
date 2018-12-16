import React from 'react';
import axios from 'axios';
import Story from './Story';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  // componentDidMount() {
  //   axios.get('/app/story/1')
  //     .then(({ data }) => {
  //       this.setState({ story: data });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div>
        <a>HomePage</a>
        <a>LogIn</a>
      </div>
    )
  }
}

export default NavBar;