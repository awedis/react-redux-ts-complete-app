import { createSelector } from 'reselect';

interface ObjectProps {
    allUsers: Array<Object>;
}

interface Props {
    users: ObjectProps
}

const selectUsers = (state: Props) => state.users;

export const selectAllUsers = createSelector(
    [selectUsers],
    users => users.allUsers
)