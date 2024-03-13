/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import axios from "axios";
import imag from "../assets/img.jpg";
import Homepage from './homepage';


function Adminpage() {
  const [tasktext, setTaskText] = useState('');
  const [newproject, setNewProject] = useState('');
  const [desp, setDesp] = useState('');
  const [prev, setPrev] = useState([]);

  const createproject = () => {
    const newProject = {
      name: newproject,
      task: tasktext,
      desp: desp,
    };

    setPrev([...prev, newProject]);
    setNewProject('');
    setTaskText('');
    setDesp('');
  };

  const handlesubmit = async(e) => {
    e.preventDefault();
    createproject();

     
    

  };

  return (
    <>
      <Navbar />
      <div className="mt-60 px-[200px] bg-gray-100 p-8 rounded-lg shadow-md">
        <form onSubmit={handlesubmit} className="mb-8">
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 font-semibold">
              Project Name
            </label>
            <input
              className="text-black bg-gray-300 p-2 rounded-md"
              value={newproject}
              name="name"
              placeholder="Project Name"
              type="text"
              onChange={(e) => setNewProject(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="task" className="mb-2 font-semibold">
              Task Description
            </label>
            <input
              className="text-black bg-gray-300 p-2 rounded-md"
              name="task"
              value={tasktext}
              placeholder="Task Description"
              type="text"
              onChange={(e) => setTaskText(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="desp" className="mb-2 font-semibold">
              Description
            </label>
            <textarea
              className="w-full text-black bg-gray-300 p-2 rounded-md"
              name="desp"
              value={desp}
              onChange={(e) => setDesp(e.target.value)}
              placeholder="Descriptions for the project"
            ></textarea>
          </div>
          <button type="submit" className="p-2 rounded-md bg-blue-500 text-white">
            Create project
          </button>
        </form>
   
        <div>
          {prev.map((project, i) => (
            <div key={i} className="w-[30%] flex-shrink-0 text-center p-4">
              <h2 className="text-4xl font-bold mb-4">FullStack </h2>
              <div className="p-4 bg-white rounded-lg mb-8"> 
                <img src={imag} className="w-90 border-4 object-fill h-[50vh] mb-4" alt="Task" />
                <p className="text-lg mb-4 text-black">
                  {project.name}
                </p>
                <p className="text-lg mb-4 text-black">
                  {project.task}
                </p>
                <p>{project.desp}</p>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                    Learn more about us
                  </button>
                  <div className="bg-black p-2 ml-[29%] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>


   
  
      </div>
  
    </>
  );
}

export default Adminpage;





   {/* <div>
          {prev.map((project, i) => (
            <div key={i} className="border p-4 rounded-md mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              <h3 className="mb-2">{project.task}</h3>
              <p>{project.desp}</p>
            </div>
          ))}
        </div> */}