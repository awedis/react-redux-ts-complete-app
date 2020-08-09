import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';
import { requestApi } from '../../redux/students/students.actions';

interface Props {
    students: any;
    getStudents: any;
}

interface IStudent {
    id: string;
    name: string;
}

const Students: FC<Props> = ({ students, getStudents }) => {
    console.log(students);
    return (
        <>
            <button onClick={() => getStudents()}>Get Students</button>

            <div>
                {students.payload.data.map((item: IStudent) =>
                    <div key={item.id}>
                        {item.name}
                    </div>
                )}
            </div>
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