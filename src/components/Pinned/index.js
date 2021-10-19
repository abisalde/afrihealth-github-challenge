import React from 'react';
import PinnedItems from '../Shared/pinnedItems';

import './Pinned.css';

const Pinned = () => {
    return (
        <div className='pinned-repository'>
            <h3 className='pinned-heading'>Pinned</h3>
            <div className='pinned-items-container'>
                <ol className='pinned-items-listing'>
                    <li className='pinned-item'>
                        <PinnedItems />
                    </li>
                    <li className='pinned-item'>
                        <PinnedItems />
                    </li>
                    <li className='pinned-item'>
                        <PinnedItems />
                    </li>
                    <li className='pinned-item'>
                        <PinnedItems />
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Pinned;
