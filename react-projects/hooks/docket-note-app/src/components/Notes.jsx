import React from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Notes = () => {
    return (
        <div className='h-screen w-full flex justify-between bg-amber-300 p-5'>
            <LeftPart />
            <RightPart />
        </div>
    );
}

export default Notes;
