import React from 'react';

import './App.scss'

import Header from './Header/Header'
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Description from './Description/Description';
import Comments from './Comments/Comments'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <VideoPlayer/>
      <Description/>
      <Comments />
    </React.Fragment>
  );
}

export default App;
