import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const params = useParams()
    return (
        <div className='text-white flex justify-center items-center min-h-screen text-6xl'>
            View {params.id} course details!!
        </div>
    );
}

export default CourseDetails;
