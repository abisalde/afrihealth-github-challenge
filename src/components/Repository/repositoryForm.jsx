import React from 'react';

const RepositoryForm = () => {
    return (
        <>
            <div className='form-repo-search'>
                <form>
                    <div className='repo-search'>
                        <div className='form-group'>
                            <label htmlFor='search'>
                                <input
                                    type='text'
                                    name='search'
                                    placeholder='Find a repository...'
                                />
                            </label>
                        </div>

                        <div className='sort-search'>
                            <button className='btn btn-type'>
                                Type <span className='sort-down'></span>
                            </button>
                            <button className='btn btn-language'>
                                Language <span className='sort-down'></span>
                            </button>
                            <button className='btn btn-sort'>
                                Sort <span className='sort-down'></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default RepositoryForm;
