import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    }
    getBook();
  }, []);
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-30 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you <span className='text-pink-500'> Here! :)</span>
        </h1>
        <p className='mt-12'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quo odio cupiditate deleniti eveniet officiis doloribus 
          laudantium nemo magnam, quisquam mollitia? Repellendus 
          libero dolore fugit nobis sunt blanditiis expedita molestiae enim.
          incidunt fugit, nesciunt quam suscipit qui, fugiat assumenda dolorum,
          exercitationem hic? Eum reiciendis neque enim qui excepturi quaerat est
          nesciunt.
        </p>
        <Link to="/">
          <button className='bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-700 duration-300 mt-6'>
            Back
          </button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
        {
          book.map((item) => (
            <Cards key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Course