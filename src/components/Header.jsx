import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='header-wrapper bg-gray-800'>
        <div className='container vh-10 d-flex justify-content-between align-items-center'>
          <div className='brand font-styled fs-2 text-gray-100'>
            React ⚛︎ Projects
          </div>

          <nav className='nav-wrapper'>
            <ul className='main-nav nav d-flex gap-2'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  aria-label='Homepage'
                  title='Homepage'
                  className='main-nav-link'>
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/projects'
                  aria-label='Projects'
                  title='Projects'
                  className='main-nav-link'>
                  Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
