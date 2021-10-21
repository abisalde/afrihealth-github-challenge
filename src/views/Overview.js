import React from 'react';
import Contributions from '../components/Contributions';
import Pinned from '../components/Pinned';
import ProfileCard from '../components/Profile';
import MobileNavigation from '../components/Shared/mobileNavigation';

const Overview = () => {
    return (
        <div className='profile-content'>
            <div className='wrapper'>
                <div className='profile-card-repo-details'>
                    <ProfileCard />
                    <div className='breadcrumbs-repository-details'>
                        <MobileNavigation />
                        <Pinned />

                        <Contributions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
