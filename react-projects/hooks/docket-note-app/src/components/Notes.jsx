import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Notes = () => {
    return (
        // <div className='h-screen w-full flex flex-col md:lg:flex-row justify-between'>
        <div className='flex flex-row h-full w-full'>
            <LeftPart />
            <RightPart />
        </div>
    );
}

export default Notes;
