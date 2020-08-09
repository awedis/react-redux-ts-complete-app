import React from 'react';
import Sample from './components/sample/sample.component';
import UserApiCall from './components/users/users.component';
import Age from './components/age/age.component';
import Students from './components/students/students.component';

function App() {
  return (
    <div>
      <Sample />
      <UserApiCall />
      <Age />
      <hr/>
      <Students />
    </div>
  );
}

export default App;
