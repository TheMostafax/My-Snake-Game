import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import image from '../assets/snake.png';
import {Link } from 'react-router-dom';
import Snake from './snake'
import Navbar from './navbar'
function Home(){
 


  return (
    <>
     <div className="w-full h-screen bg-gradient-to-b from-green-500 to-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className='flex flex-col md:flex-row items-center md:justify-between'>
          <div className='md:w-1/2'>
            <h1 className="text-3xl sm:text-5xl px-6 py-3 font-bold text-white font-serif">
              My Snake Game
            </h1>
            <Link to='/snake' className='text-7xl text-white'>
            </Link>
          </div>
         

          
          <div className='md:w-1/1.5 flex justify-end md:justify-center'>
            <img
              src={image}
              alt='profile'
              className="rounded-full h-auto w-81 md:w-95"
            />
          </div>
          
        </div>
        <button className="text-white group border-2 px-6 py-3 my-2 mr-3  items-center rounded-full hover:bg-gradient-to-r hover:border-gradient-to-r border-yellow-500">
          <a href ="/snake">Start</a>
              </button>
              <button className="text-white group border-2 px-6 py-3 my-2 mr-3  items-center rounded-full hover:bg-gradient-to-r hover:border-gradient-to-r border-yellow-500">
          <a href ="/about">About the game</a>
              </button>
      </div>
      
    </div>
   

    </>
    
  
   
  );
};
export default Home;