import React, { FC, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const Main = lazy(() =>
    import('./views')
);
const ViewApp = lazy(() => 
  import('./views/app')
);
const ViewError = lazy(() =>
  import('./views/error')
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<div className="loading" />}>
        <Router>
          <Switch>
            <Route path="/" exact render={props => <Main {...props} />} />
            <Route path="/app" render={props => <ViewApp {...props} />} />
            <Route path='/error' exact render={props => <ViewError {...props} />} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
