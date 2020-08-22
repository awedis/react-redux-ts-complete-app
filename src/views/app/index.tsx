import React, { FC, Suspense, lazy } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

interface Props {
    match: any;
}

const Dashboard = lazy(() =>
    import('./dashboard')
);
const Home = lazy(() =>
    import('./home')
);

const App: FC<Props> = ({ match }) => {
    return (
        <Suspense fallback={<div className='loading' />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/dashboard`} />
                <Route path={`${match.url}/dashboard`} render={props => <Dashboard {...props} />} />
                <Route path={`${match.url}/home`} render={props => <Home {...props} />} />
                <Redirect to='/error' />
            </Switch>
        </Suspense>
    )
}

export default App;