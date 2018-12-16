import React from 'react';
import axios from 'axios';

class PostBox extends React.Component {
  constructor(props) {
    super(props);
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
        <textarea >{this.props.text}</textarea>
      </div>
    )
  }
}

export default PostBox;