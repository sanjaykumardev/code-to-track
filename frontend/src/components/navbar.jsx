import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const navigator = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null || false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigator('/Loader');
    setTimeout(() => {
      navigator('/login');
    }, 1000);
  };


  return (
    <nav className="bg-gray-900 p-4 ">
      <div className="container ml-60 md:mt-2  flex justify-between items-center">
        <Link to="/home" className="text-white text-sm ml-0 mr-80 font-bold">
          <p className='mt-1 text-xl text-center'>dfbvjdb</p>
        </Link>

        <div className="hidden md:flex  text-lg space-x-20 ml-28">
          <Link to="/" className="text-white font-bold">
            Home
          </Link>
          <Link to="/about" className="text-white font-bold hover::shadow-black-500/50 ">
            About
          </Link>
          <Link to="/services" className="text-white font-bold">
            Services
          </Link>
          <Link to="/contact" className="text-white  font-bold">
            Contact
          </Link>
        </div>


        <div className="flex space-x-4 ml-20 relative">
          {isLoggedIn ? (
            <>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className=" text-yellow-500 text-lg font-semi-bold shadow-md shadow-black-500/50 px-5 py-4 w-30 rounded">
                <CgProfile className="inline mr-2" />
                Profile
              </button>
              {isProfileOpen && (
                <div className="absolute  w-48 left-20 top-10 right-0 mt-2 py-2 font-bold  bg-gray-500 border border-gray-300 rounded-md shadow-xl">
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account
                  </Link>
                  <Link to="/tasks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Task complete
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/login">
                <button className=" shadow-md bg-blue-500 shadow-black-500/50 ml-10 text-xl font-bold text-white px-4 py-2 rounded">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-blue-500 shadow-md  font-bold text-white text-xl px-4 py-2 rounded">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


{/* {isProfileOpen && (
                <div className="absolute right-0 w-48 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-xl">
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Account
                  </Link>
                  <Link to="/tasks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Task
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )} */}


//   <Link to="/login">
//   <button className=" shadow-md bg-yellow-300 shadow-black-500/50 ml-10 text-xl font-bold text-white px-4 py-2 rounded">
//     Login
//   </button>
// </Link>
// <Link to="/register">
//   <button className="bg-yellow-300 shadow-md  font-bold text-white text-xl px-4 py-2 rounded">
//     Register
//   </button>
// </Link>