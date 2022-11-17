import React from 'react';

const Projects = () => {
  return (
    <>
      <div className='projects-wrapper container'>
        <div>
          <h1 className='font-styled text-secondary fs-2 mb-4'>Projects</h1>
        </div>

        <div className='d-flex gap-2'>
          <div className='border-styled-secondary p-4'>
            <div>Projects 1</div>
          </div>
          <div className='border-styled-secondary p-4'>
            <div>Projects 2</div>
          </div>
          <div className='border-styled-secondary p-4'>
            <div>Projects 3</div>
          </div>
          <div className='border-styled-secondary p-4'>
            <div>Projects 4</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
