import { X } from 'lucide-react';
import { useState } from 'react';

const NoteForm = ({ color, onClose, addNotes }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        if (!title.trim() && !description.trim()) return

        // create the note object
        const newNote = {
            id: Date.now(),   // unique id
            title,
            description,
            color,            // background color they picked
        };

        addNotes(newNote);     // 👈 send note up to App
        onClose();            // close the form
        setTitle('');         // reset
        setDescription('');
    }

    return (
        // dark overlay behind the form
        <div className='fixed inset-0 flex items-center justify-center bg-black/30 z-50'>

            {/* the form box */}
            <div
                className='relative w-[90%] md:w-[400px] rounded-2xl p-6 shadow-xl'
                style={{ backgroundColor: color }} // 👈 uses the color they picked
            >

                {/* X close button */}
                <button
                    className='absolute top-3 right-3 bg-white/40 rounded-full p-1 hover:bg-white/70 transition'
                    onClick={onClose} // 👈 hides the form
                >
                    <X size={18} />
                </button>

                {/* Title input */}
                <input
                    type='text'
                    placeholder='Note title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full bg-transparent border-none outline-none 
                    text-lg font-semibold placeholder:text-black/40 mb-4'
                />

                {/* Divider */}
                <div className='w-full h-[1px] bg-black/10 mb-4' />

                {/* Description textarea */}
                <textarea
                    placeholder='Write your note here...'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full bg-transparent border-none outline-none 
                    resize-none placeholder:text-black/40 h-32'
                />

                <button className='bg-white px-3 py-1 w-full font-medium cursor-pointer transition-all ease-linear hover:font-semibold text-center' onClick={(e) => { submitHandler(e) }}>Add to notes</button>

            </div>
        </div>
    );
};

export default NoteForm;