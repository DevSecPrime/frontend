import React from 'react';

const ImageCard = (props) => {
    return (
        <div>
            <div key={props.idx} className='h-40 w-45 rounded-2xl overflow-hidden'>
                <img src={props.data.download_url} alt="" className='object-cover h-full w-full' loading='lazy' />
            </div>
            <span className='font-semibold'>{props.data.author}</span>
        </div>
    );
}

export default ImageCard;
