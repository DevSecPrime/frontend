import React from 'react'

const Colors = (props) => {
    const noteColors = [
        "#f5c842",  // yellow
        "#f4845f",  // orange
        "#a8d8a8",  // green (you can add more)
        "#a0c4ff",  // blue
        "#ffadad",  // pink
    ];

    return (
        <div className={`flex flex-row md:lg:flex-col items-center gap-x-5 md:lg:gap-y-5 transition-all duration-300`}>
            {noteColors.map((color, idx) => (
                <div
                    className='h-5 w-5 rounded-full cursor-pointer transition-transform hover:scale-125'
                    style={{
                        backgroundColor: color,
                        // 👇 This is the magic
                        opacity: props.isOpenColorPallet ? 1 : 0,
                        transform: props.isOpenColorPallet
                            ? 'translateY(0) scale(1)'
                            : 'translateY(-10px) scale(0)',
                        transitionDelay: props.isOpenColorPallet
                            ? `${idx * 60}ms`   // open:  stagger down
                            : `${(noteColors.length - idx) * 40}ms`, // close: reverse stagger
                        pointerEvents: props.isOpenColorPallet ? 'auto' : 'none',
                    }}
                    key={idx}
                />
            ))}
        </div>
    )
}

export default Colors
