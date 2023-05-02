import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gray-200 mx-20'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex justify-between items-center  h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className='text-black font-bold text-4xl'>
              Food Gate
            </Link>
          </div>

          <div className='flex items-center -mr-2 sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <FaTimes className='block h-6 w-6' />
              ) : (
                <FaBars className='block h-6 w-6' />
              )}
            </button>
          </div>

          <div className='hidden sm:flex sm:items-center '>
            <div className=''>
              <ul className='hidden sm:flex sm:items-center'>
                <li className='ml-6'>
                  <Link
                    to='/'
                    className='text-black  px-3 py-2 rounded-md text-xl font-medium'
                  >
                    Home
                  </Link>
                </li>
                <li className='ml-6'>
                  <Link
                    to='/blog'
                    className='text-black px-3 py-2 rounded-md text-xl font-medium'
                  >
                    Blog
                  </Link>
                </li>

              </ul>
            </div>
            <div>
              <Link to='/login'><button className="btn ">Login</button></Link>
            </div>

          </div>


        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className='px-2 pt-2 pb-3'>
          <Link
            to='/about'
            className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            About
          </Link>
          <Link
            to='/services'
            className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            Services
          </Link>
          <Link
            to='/contact'
            className='block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            Contact
          </Link>
          <Link 
          to='/login'><button className="btn ">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
