import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Courses() {
  return (
    <>
    <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4">
      <div className='mt-10 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>We're delighted to have you{" "} <span className='text-pink-500'>here ! :) </span> </h1>
        <p className="mt-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quo exercitationem officia fuga neque cupiditate laborum natus illo ex, eligendi atque quod, facilis molestiae iure quaerat? Aspernatur tempora fugit necessitatibus a expedita rem iure omnis natus magni error voluptatibus
           optio tenetur, quod mollitia sed repellat! 
           Quidem quis esse quos nesciunt!</p>
          <Link to='/'>
           <button className=" mt-6 btn btn-secondary hover:bg-pink-700 duration-300">Back</button>
          </Link>
      </div>
      <div className='text-black mt-12 mb-2 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item)=>(
          <Cards item={item} key={item.id} />

         ) )
          
        }
      </div>
    </div>
    </>
  )
}

export default Courses
