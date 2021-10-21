import React from 'react';

import ProfileCard from '../components/Profile';
import RepositoryIndex from '../components/Repository';
import MobileNavigation from '../components/Shared/mobileNavigation';

const RepositoriesView = () => {
    return (
        <div className='profile-content'>
            <div className='wrapper'>
                <div className='profile-card-repo-details'>
                    <ProfileCard />
                    <MobileNavigation />
                    <RepositoryIndex />
                </div>
            </div>
        </div>
    );
};

export default RepositoriesView;
