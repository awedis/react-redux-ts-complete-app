import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';
import { requestApi } from '../../redux/students/students.actions';

interface Props {
    students: any;
    getStudents: any;
}

const Students: FC<Props> = ({ students, getStudents }) => {
    console.log(students);
    return (
        <>
            <button onClick={() => getStudents()}>Get Students</button>
        </>
    );
}

const mapStateToProps = (state: IAppState) => ({
    students: state.students
});
  
const mapDispatchToProps = (dispatch: any) => ({
    getStudents: () => dispatch(requestApi())
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Students)