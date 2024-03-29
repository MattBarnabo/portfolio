import React from 'react'
import TicTacToe from '../assets//Projects/React-tic-tac-toe.png'
import TextBasedGame from '../assets/Projects/Text_based_game.png'


const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Projects</p>
          <p className='pt-4'>Check out some of my recent projects</p>
        </div>

        {/* Card container */}
        <div className='grid sm:grid-cols-2 md: grid-cols-3 gap-4'>

          {/* Card item */}
          <div style={{backgroundImage: `url(${TicTacToe})`}} className='shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effect */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wide'>
                    React JS Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
          {/* Card item */}
          <div style={{backgroundImage: `url(${TextBasedGame})`}} className='shadow-lg shadow-[#040c16] group container rouded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover Effect */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wide'>
                    Ruby Application
                </span>
                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
