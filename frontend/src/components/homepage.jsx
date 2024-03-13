/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import imag from "../assets/img.jpg";

function Homepage() {
  return (
    <main className="Home p-6 mt-20 ">

      <div className="ImageContainer relative w-full mt-5 object-cover md:mt-10 md:h-[45vh] mb-40">
        <img
          src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?t=st=1710008087~exp=1710011687~hmac=33defc9015fab4cde424ec66303547989f8f4229b17685ce3b02296350b33d26&w=996"
          alt="Rapeseed Field"
          className="w-full h-full object-cover"
        />
        <div className="AbsoluteText absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 opacity-0 transition duration-300 hover:opacity-100">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to the Code Website!
          </h1>
          <p className="text-lg mb-3 text-white">
            Here you can find all the latest code snippets, tutorials, and resources for your coding needs.
          </p>
          <button className='bg-blue-500 md:mt-3  ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            See Task Complection
          </button>
        </div>
      </div>

      <div className='text-4xl font-mono bg-white text-black text-center  w-[50%] ml-[25%] mb-20'>
        <h3>Challenges for Week</h3>
      </div>




      <div className="flex justify-center">
        <div className="w-[20%] flex-shrink-0 text-center p-4">
          <h2 className="text-4xl font-bold mb-4"> Java weekly </h2>
          <div className="TaskContainer p-4 bg-white rounded-lg mb-8">
            <img src={imag} className="w-90 border-4 object-fill h-[50vh] mb-4" alt="Task" />
            <p className="text-lg mb-4 text-black">
              Complete the daily coding task and improve your skills.Learn something new every day and build a habit of coding regularly.
            </p>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more about us
              </button>
              <div className="bg-black text-white p-2 ml-[29%] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex-shrink-0 text-center p-4">
          <h2 className="text-4xl font-bold mb-4 fond-mono" >Java weekly</h2>
          <div className="TaskContainer p-4 bg-white rounded-lg mb-8">
            <img src={imag} className="w-90 border-4 object-fill h-[50vh] mb-4" alt="Task" />
            <p className="text-lg mb-4 text-black">
              Complete the daily coding task and improve your skills.
              Learn something new every day and build a habit of coding regularly.
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more about us
              </button>
              <div className="bg-black p-2 ml-[29%] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex-shrink-0 text-center p-4">
          <h2 className="text-4xl font-bold mb-4 fond-mono">Basics Of Java</h2>
          <div className="TaskContainer p-4 bg-white rounded-lg mb-8">
            <img src={imag} className="w-90 border-4 object-fill h-[50vh] mb-4" alt="Task" />
            <p className="text-lg mb-4 text-black">
              Complete the daily coding task and improve your skills.
              Learn something new every day and build a habit of coding regularly.
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more about us
              </button>
              <div className="bg-black p-2 ml-[29%] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%] flex-shrink-0 text-center p-4">
          <h2 className="text-4xl font-bold mb-4">Daily Task</h2>
          <div className="TaskContainer p-4 bg-white rounded-lg mb-8">
            <img src={imag} className="w-90 border-4 object-fill h-[50vh] mb-4" alt="Task" />
            <p className="text-lg mb-4 text-black">
              Complete the daily coding task and improve your skills.
              Learn something new every day and build a habit of coding regularly.
            </p>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Learn more about us
              </button>
              <div className="bg-black p-2 ml-[29%] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Homepage;
