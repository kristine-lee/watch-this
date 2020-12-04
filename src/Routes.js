import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import {Home, Header, ResultsPage} from './Components/index';

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/results" render={(props) => <ResultsPage {...props}/>} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(Routes);
