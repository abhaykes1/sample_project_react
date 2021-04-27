import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Jobs from './components/Jobs'

function App() {
  return (
    <Router basename={`/${process.env.REACT_APP_HASH}/`}>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route exact path="/jobs" component={Jobs} />
      </Switch>
    </Router>
  );
}

export default App;
