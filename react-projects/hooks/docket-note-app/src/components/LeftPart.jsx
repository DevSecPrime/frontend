import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Colors from './Colors';
import NotesForm from './NotesForm';

const LeftPart = (props) => {
    const [isOpenColorPallet, setIsOpenColorPallet] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [selectedColor, setSelectedColor] = useState(null)

    const colorClickHandler = (color) => {
        //get color code
        console.log("color: ", color)
        setSelectedColor(color)
        //open form
        setIsFormOpen(true)
        //un-visible color pallet
        setIsOpenColorPallet(false)
    }

    return (
        // Mobile  → horizontal bar at top (flex-row)
        // Desktop → vertical sidebar on left (flex-col)
        <div className='
            flex items-center
            flex-row md:flex-col
            w-full md:w-[10%]
            h-auto md:h-full
            px-4 md:px-0 py-3
            gap-x-5 md:gap-x-0 md:gap-y-10
            border-b md:border-b-0 md:border-r
            border-gray-200
        '>

            {/* Logo */}
            <span className='font-semibold leading-[1.1]'>Docket</span>

            {/* Plus button + color palette */}
            <div className='flex flex-col items-center gap-y-5'>

                <div
                    className={`text-white bg-black rounded-full p-2 cursor-pointer 
                    transition-transform duration-300 active:scale-90 
                    ${isOpenColorPallet ? 'rotate-45' : 'rotate-0'}`}
                    onClick={() => setIsOpenColorPallet(!isOpenColorPallet)}
                >
                    <Plus size={25} color="#ffffff" strokeWidth={1.5} />
                </div>

                <Colors isOpenColorPallet={isOpenColorPallet} onColorClick={colorClickHandler} />

            </div>

            {/* show form once is open form is true  */}
            {
                isFormOpen && (
                    <NotesForm color={selectedColor} onClose={() => setIsFormOpen(false)} addNotes={props.addNotes} />
                )
            }
        </div>
    );
};

export default LeftPart;