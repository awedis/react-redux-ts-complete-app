import React, { lazy, Suspense } from 'react';
import Sample from './components/sample/sample.component';
// import UserApiCall from './components/users/users.component';
const UserApiCall = lazy(() => import("./components/users/users.component"));

function App() {
  return (
    <div>
      <Sample />
      <Suspense fallback={<div>Loading...</div>}>
        <UserApiCall />
      </Suspense>
    </div>
  );
}

export default App;
