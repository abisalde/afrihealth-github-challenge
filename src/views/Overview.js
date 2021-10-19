import React from 'react';
import Contributions from '../components/Contributions';
import Pinned from '../components/Pinned';
import ProfileCard from '../components/Profile';

const Overview = () => {
    return (
        <div className='profile-content'>
            <div className='wrapper'>
                <div className='profile-card-repo-details'>
                    <ProfileCard />
                    <div className='breadcrumbs-repository-details'>
                        <Pinned />
                        <Contributions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
