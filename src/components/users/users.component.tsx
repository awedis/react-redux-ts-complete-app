import React, { FC, useEffect } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';

import { fetchUsers } from '../../redux/users/users.actions'

import { Spinner } from 'react-bootstrap';

interface ObjectProps {
    loading: Boolean;
    users: any;
    error: String;
}

interface Props {
    usersData: ObjectProps;
    setUsers: any;
}

const UsersApiCall: FC<Props> = ({ usersData, setUsers }) => {
    console.log('----LOADING');
    console.log(usersData.loading);

    return (
        <>
            <button onClick={() => setUsers()}>Get Api</button>

            {usersData.loading &&
                <Spinner animation="border" variant="dark" />
            }

            {usersData.error ? <p>Something went wrong please try again later</p> : null}

            {usersData.users && usersData.users.map((user: any, key: any) => <p key={key}>{user.name}</p>)}
        </>
    );
}

const mapStateToProps = (state: IAppState) => ({
    usersData: state.users
})
  
const mapDispatchToProps = (dispatch: any) => ({
    setUsers: () => dispatch(fetchUsers())
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(UsersApiCall)