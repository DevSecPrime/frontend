import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ImageCard from './components/ImageCard';
import PageBtn from './components/PageBtn';


const App = () => {

  const [getUserData, setGetUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const getImageData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    const data = response?.data

    setGetUserData(data)
  }

  useEffect(() => {
    getImageData()
  }, [index])

  let printUserData = <p>No data found</p>

  if (getUserData?.length > 0) {
    printUserData = getUserData.map((data, idx) => {
      return <ImageCard key={idx} data={data} />
    })
  }



  return (
    <div className="min-h-screen bg-black p-10 text-white flex flex-col items-center justify-center gap-10 ">
      {/* Use grid-cols to define how many images per row */}
      <div className='h-[82%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4'>
        {getUserData.length > 0 ? printUserData : <p>Loading...</p>}
      </div>

      <div className='w-full flex flex-row justify-between'>
        <button className='bg-green-400 active:scale-95 px-3 py-3 text-black' onClick={() => {
          if (index > 1) {
            setIndex(index - 1)
            setGetUserData([])
          }
        }}>Previous</button>
        <span>Page: {index} </span>
        <button className='bg-green-400 active:scale-95 px-3 py-3 text-black' onClick={() => {
          setGetUserData([])
          setIndex(index + 1)
        }}>Next</button>

      </div>


    </div>
  );
}

export default App;
