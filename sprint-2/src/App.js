import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";

import './App.scss'

import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Upload from './components/UploadContainer/UploadContainer';

function App() {
  return (
      <BrowserRouter>
        <Header/>
          {/* <Route path='/' exact render={() => <MainContent videoId="1af0jruup5gu"/>}/>
          <Route path='/:id' exact render={(routerProps) => <MainContent videoId={routerProps.match.params.id}/>}/> */}
          <Route path='/upload' exact component={Upload}/>
      </BrowserRouter>
  );
}

export default App;
