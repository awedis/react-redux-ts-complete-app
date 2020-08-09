import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';
import { fetchUsers } from '../../redux/users/users.actions';
import Loader from '../../components/loader/loader.componet';

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

    useEffect(() => {
        setUsers()
    }, []);

    return (
        <>
            {/* <button onClick={() => setUsers()}>Get Api</button> */}

            {usersData.users.length == 0 && usersData.loading &&
                <Loader />
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