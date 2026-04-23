import React from 'react';

const PageBtn = (props) => {

    console.log({ props })
    return (
        <div className='bg-green-400 active:scale-95 px-3 py-3 text-black'>
            <button>{props.btnname}</button>
        </div>
    );
}

export default PageBtn;
