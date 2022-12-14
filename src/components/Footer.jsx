import React from 'react';

function Footer() {
  const currentYear = new Date();
  const yyyy = { year: 'numeric' };

  return (
    <>
      <footer className='footer-wrapper bg-gray-800'>
        <div className='container vh-10 d-flex gap-2 flex-column justify-content-center align-items-center text-gray-100'>
          <p>Developed by Vanessa Barsotti</p>

          <p>
            {currentYear.toLocaleDateString('en-US', yyyy)} &copy; All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
