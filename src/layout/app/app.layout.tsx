import React, { FC } from 'react';
import TopNav from '../../components/topnav/topnav.comopnent';

interface Props {
    children: React.ReactNode 
}

const AppLayout: FC<Props> = ({ children }) => {
    return (
        <div>
            <TopNav />
            <div className='main-container'>
                {children}
            </div>
        </div>
    )
}

export default AppLayout;