import React from 'react';
import axios from 'axios';
import StoryList from './StoryList';
import Story from './Story';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      storyIndex: null,
      list: [
        {
          title: 'Harry Potter',
          author: 'JK Rollin',
          text: 'A boy with a lightning scar.',
          last_update: '2018/12/12'
        },
        {
          title: 'Pokemon',
          author: 'Satoshi',
          text: 'Pikachu used thunderbolt!',
          last_update: '2018/12/11'
        },
      ],
    };
    this.clickOnStory = this.clickOnStory.bind(this);
    this.goHomePage = this.goHomePage.bind(this);
    this.goNewStory = this.goNewStory.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/app/story/1')
  //     .then(({ data }) => {
  //       this.setState({ story: data });
  //     })
  //     .catch((err) => console.log(err));
  // }

  clickOnStory(index) {
    this.setState({ storyIndex: index });
  }

  displayStory() {
    if (this.state.storyIndex === null) {
      return (
        <StoryList list={this.state.list} clickOnStory={this.clickOnStory}/>
      );
    } else {
      return (
        <Story story={this.state.list[this.state.storyIndex]} />
      );
    }
  }

  goHomePage() {
    this.setState({ storyIndex: null });
  }

  goNewStory() {
    
  }

  render() {
    return (
      <div>
        <button onClick={this.goHomePage} >Home Page</button>
        <button onClick={this.goNewStory} >New Story</button>
        {this.displayStory()}
      </div>
    )
  }
}

export default Main;