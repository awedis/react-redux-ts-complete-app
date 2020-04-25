import { createSelector } from 'reselect';

interface ObjectProps {
    currentFlag: string;
}

interface Props {
    flag: ObjectProps
}

const selectFlag = (state: Props) => state.flag;

export const selectCurrentFlag = createSelector(
    [selectFlag],
    flag => flag.currentFlag
)