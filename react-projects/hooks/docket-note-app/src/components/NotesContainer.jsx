import React from 'react'

const NotesContainer = ({ notes }) => {
    console.log("we are called form the notes: ", notes)
    return (
        <div className='mt-2.5 h-full w-full p-4 flex flex-wrap gap-6'>

            {
                notes.length === 0 && (
                    <p className='text-gray-400'>No notes yet. Click + to add one!</p>
                )
            }

            {notes.map((note) => (
                <div
                    key={note.id}
                    className='h-[250px] w-[200px] p-4 rounded-2xl flex flex-col shadow-sm'
                    style={{ backgroundColor: note.color }}  // 👈 use saved color
                >
                    <span className='text-xl font-semibold capitalize'>
                        {note.title}
                    </span>
                    <p className='text-sm mt-2 overflow-hidden line-clamp-6'>
                        {note.description}
                    </p>
                </div>
            ))}

        </div>
    )
}

export default NotesContainer
