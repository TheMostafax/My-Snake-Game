import React from 'react'
import Key from '../assets/keyboard.png'
const About = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-green-500 to-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className='flex flex-col md:flex-row items-center md:justify-between'>
          <div className='md:w-1/2'>
            <h1 className="text-3xl sm:text-5xl px-6 py-3 font-bold text-yellow-500 font-serif">
              My Snake Game
            </h1>
          </div>
          <div className='md:w-1/2'>
            <p className="text-lg sm:text-2xl px-6 py-3 text-white font-serif">
              Snake Game is a classic video game in which the snake tries to collect the apples to get a high score!
            </p>
            <p className="text-lg sm:text-2xl px-6 py-3 text-white font-serif">
              There are some constraints as: If the snake collides with the border or with its own body, it will "die" or the game will end.
            </p>
            <p className="text-lg sm:text-2xl px-6 py-3 text-white font-serif">
             Controls using the keyboard: Arrow-Up, Arrow-Right, Arrow-Left, Arrow-Down.
            </p>
            <div className='md:w-1/1.5 flex justify-end md:justify-center'>
            <img
              src={Key}
              alt='profile'
              className="h-auto w-81 md:w-95"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About