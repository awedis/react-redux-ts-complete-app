import React, { FC } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';

interface IState {
    age: number;
}

interface Props {
    state: IState;
    onAgeUp: any;
    onAgeDown: any;
}

const Age: FC<Props> = ({ state, onAgeUp, onAgeDown }) => {
    console.log('Age component');
    console.log(state);
    return (
        <>
            <h1>{state.age}</h1>
            <button onClick={() => onAgeUp()}>Age Up</button>
            <button onClick={() => onAgeDown()}>Age Down</button>
        </>
    );
}

const mapStateToProps = (state: IAppState) => ({
    state: state.age
})
  
const mapDispatchToProps = (dispatch: any) => ({
    onAgeUp: () => dispatch({ type: 'AGE_UP', payload: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', payload: 1 })
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(Age)