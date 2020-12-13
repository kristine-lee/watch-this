import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {Home, Header, ResultsPage, SingleMovie} from './Components/index';

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/results" render={(props) => <ResultsPage {...props}/>} />
        <Route path="/results/:id" render={(props) => <SingleMovie {...props} />} />
        <Route path="/results/:id" render={({ match }) => (
          <SingleMovie params={match.params} />)} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(Routes);
