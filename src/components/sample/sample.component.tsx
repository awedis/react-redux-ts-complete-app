import React, { FC } from 'react';
// @ts-ignore
import { connect } from 'react-redux';
import { IAppState } from '../../redux/root-reducer';

import { setCurrentFLag } from '../../redux/flag/flag.actions';
import { selectCurrentFlag } from '../../redux/flag/flag.selectors';

interface Props {
    flag: string;
    setFlag: any;
}

const Sample: FC<Props> = ({ flag, setFlag }) => {

    const chooseFlag = () => {
        let newFlag: any;
        (flag === 'ON') ? newFlag = 'OFF' : newFlag = 'ON';
        setFlag(newFlag);
    }

    return (
        <>
            {flag && <div>{flag}</div>}
            <button onClick={() => chooseFlag()}>Click</button>
        </>
    );
}

const mapStateToProps = (state: IAppState) => ({
    flag: selectCurrentFlag(state)
})
  
const mapDispatchToProps = (dispatch: any) => ({
    setFlag: (data: string) => dispatch(setCurrentFLag(data))
})

const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(Sample)