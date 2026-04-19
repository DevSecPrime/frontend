import React, { useState } from 'react';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Notes = () => {
    // All notes lives here 
    const [notes, setNotes] = useState([])  //this notes will be used for receive the note

    //Add new note to list
    const addNotes = (note) => {
        setNotes([...notes, note])
    }
    return (
        // <div className='h-screen w-full flex flex-col md:lg:flex-row justify-between'>
        <div className='flex flex-row h-full w-full'>
            <LeftPart addNotes={addNotes} />
            <RightPart notes={notes} />
        </div>
    );
}

export default Notes;
