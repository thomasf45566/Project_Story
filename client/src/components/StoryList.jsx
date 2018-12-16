import React from 'react';
import axios from 'axios';
import Story from './Story';

const StoryList = ({ list, clickOnStory }) => (
  <div>
    {list.map((story, index) => (
      <h3 onClick={() => clickOnStory(index)}>{story.title}</h3>
    ))}
  </div>
);

export default StoryList;