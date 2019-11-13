import React from 'react';
import { BrowserRouter, Route,Switch} from "react-router-dom";

import './App.scss'

import MainContent from './components/MainContent/MainContent';
import Header from './components/Header/Header';
import Upload from './components/UploadContainer/UploadContainer';
import NoMatch from './components/NoMatch';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact render={() => <MainContent videoId="1af0jruup5gu"/>}/>
          <Route path='/upload' exact component={Upload}/>
          <Route path='/:id' exact render={(routerProps) => <MainContent videoId={routerProps.match.params.id}/>}/>
          <Route path='*' exact={true} component={NoMatch} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
