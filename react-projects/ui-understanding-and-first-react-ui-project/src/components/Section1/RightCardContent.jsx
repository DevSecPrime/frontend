
const RightCardContent = (props) => {
    
    return (
        <div className="absolute top-0 left-0 h-full w-full p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <h2 className={`rounded-full h-10 w-10 sm:h-12 sm:w-12 flex justify-center items-center text-xl sm:text-2xl font-semibold`} style={{backgroundColor:props.buttonColor}}>
                {props.id + 1}
            </h2>
            <div className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
                <p className="text-sm sm:text-base md:text-lg leading-[1.4] text-white">

                    {props.description}
                </p>
                <div className="flex flex-row justify-between gap-2">
                    <button className={`px-4 sm:px-6 md:px-8 py-1 sm:py-2 rounded-3xl text-xs sm:text-sm md:text-base whitespace-nowrap`} style={{ backgroundColor: props.buttonColor, color: props.textColor }}>
                        {props.tag}
                    </button>
                    <button className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full hover:opacity-90 transition-colors duration-300 flex items-center gap-x-1 sm:gap-x-2 text-lg md:text-xl`} style={{ backgroundColor: props.buttonColor, color:props.textColor }}>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RightCardContent;
