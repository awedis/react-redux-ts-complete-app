import React, { FC, Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

interface Props {
    match: any;
}

const DashboardPage = lazy(() =>
    import('./dashboard.page')
);

const HomeView: FC<Props> = ({ match }) => (
    <Suspense fallback={<div className='loading' />}>
        <Switch>
            {/* <Redirect exact from={`${match.url}`} to={`${match.url}/home`} /> */}
            <Route 
                path={`${match.url}`}
                render={props => <DashboardPage {...props} />} 
            />
        </Switch>
    </Suspense>
)

export default HomeView;