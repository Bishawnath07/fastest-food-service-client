import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProviders';
import img from '../../../../assets/download.png'
import man from './image/343758505_1228319094488968_5194510006319260253_n.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user,  logOut } = useContext(AuthContext)
  
  const [activeRoute, setActiveRoute] = useState('/');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveRoute(pathname);
  }, [pathname]);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error))
  }

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=' mx-20 mt-5 '>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex justify-between items-center  h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className={activeRoute === '/' ? 'active' : ''}>
              <img className='h-16 w-48' src={img} alt="" />
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
                  <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-semibold block lg:inline' : 'text-black px-3 py-2 rounded-md text-xl font-medium')}
                  >
                    Home
                  </NavLink>
                </li>
                <li className='ml-6'>
                  <NavLink
                    to='/blog'
                    className={({ isActive }) => (isActive ? 'text-blue-600 px-2 font-xl font-semibold block lg:inline' : 'text-black px-3 py-2 rounded-md text-xl font-medium')}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className='ml-6'>
                  <NavLink
                  
                    className='text-black px-3 py-2 rounded-md text-xl font-medium'
                  >
                    Menu
                  </NavLink>
                </li>
                <li className='ml-6'>
                  <NavLink
                     className='text-black px-3 py-2 rounded-md text-xl font-medium'
                  >
                    About Us
                  </NavLink>
                </li>

              </ul>
            </div>
            <div className='ps-20'>
              {user ?
                <NavLink >
                  <div className='flex items-center gap-5'>
                    {
                      user && <div className="tooltip" data-tip={user && user.displayName}>
                        <img className='rounded-xl h-10 w-10' src={user.photoURL} alt="" />
                      </div>
                    }
                    <button onClick={handleLogOut} className="btn ">LogOut</button>
                  </div>
                </NavLink> :
                <NavLink to='/login'><button className="btn ">Login</button></NavLink>
              }
            </div>

          </div>


        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className='px-2 pt-2 pb-3'>
          <Link
            to='/'
            className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            Home
          </Link>
          <Link
            to='/blog'
            className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            Blog
          </Link>
          <Link
            to='/contact'
            className='block px-3 py-2 rounded-md text-base font-medium  hover:text-gray-400 hover:bg-gray-700'
            onClick={toggleNavbar}
          >
            About Us
          </Link>
          <div onClick={toggleNavbar} className='md:ps-20'>
            {user ?
              <Link >
                <div className='flex justify-start items-center gap-5 ps-3'>
                  {
                    user && <div className="tooltip" data-tip="hello">
                      {
                        user && <div className="tooltip" data-tip={user && user.displayName}>
                          <img className='rounded-xl h-10 w-10' src={user.photoURL} alt="" />
                        </div>
                      }
                    </div>
                  }
                  <button onClick={handleLogOut} className="btn ">LogOut</button>
                </div>
              </Link> :
              <Link to='/login'><button className="btn ">Login</button></Link>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;