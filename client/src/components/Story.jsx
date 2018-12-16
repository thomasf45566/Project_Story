import React from 'react';
import PostBox from './PostBox';

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
    this.enterEditMode = this.enterEditMode.bind(this);
    this.displayText = this.displayText.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/app/story/1')
  //     .then(({ data }) => {
  //       this.setState({ story: data });
  //     })
  //     .catch((err) => console.log(err));
  // }

  enterEditMode() {
    this.setState({ editMode: true });
  }

  displayText(text) {
    if (this.state.editMode) {
      return (
        <PostBox text={text} />
      )
    } else {
      return (
        <p>{text}</p>
      )
    }
  }

  render() {
    let { title, author, text, last_update } = this.props.story;
    return (
      <div>
        <button onClick={this.enterEditMode}>Edit</button>
        <h1>{title}</h1>
        <p>By: {author}</p>
        {this.displayText(text)}
        <p>Last Update: {last_update}</p>
      </div>
    );
  }
}

export default Story;