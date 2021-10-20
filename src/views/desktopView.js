import React from 'react';
import ProfileCard from '../components/Profile';
import RepositoryIndex from '../components/Repository';

const DesktopView = () => {
    return (
        <div className='profile-content'>
            <div className='wrapper'>
                <div className='profile-card-repo-details'>
                    <ProfileCard />
                    <RepositoryIndex />
                </div>
            </div>
        </div>
    );
};

export default DesktopView;
