import React from 'react';
import NotesContainer from './NotesContainer';

const RightPart = ({ notes }) => {
    return (
        <div className='h-full sm:w-full w-[90%] p-5 flex flex-col'>
            <span className='font-bold text-5xl text-gray-90 px-5'>Notes</span>
            <NotesContainer notes={notes} />
        </div>
    );
}

export default RightPart;
