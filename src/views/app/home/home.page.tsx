import React from 'react';
import Sample from '../../../components/sample/sample.component';
import UserApiCall from '../../../components/users/users.component';
import Age from '../../../components/age/age.component';
import Students from '../../../components/students/students.component';

const Home = ({ ...props }) => {
    return (
        <>
            <h1>Home Page</h1>
            <Sample />
            <UserApiCall />
            <Age />
            <Students />
        </>
    )
}

export default Home;