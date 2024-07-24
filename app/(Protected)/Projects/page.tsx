import React from 'react';
import ProjectImage from './project';
import Link from 'next/link';

function Projects() {
  return (
    <main className=" projectsmain">
      <h2>NPN.DEV Projects</h2>
      <p><Link href={'https://github.com/PNJOGU/'}>Github repository</Link></p>
      <section className='projectsection'>
        <ProjectImage link='https://softhome-e8de2.web.app/' src='/Screenshot 2024-06-15 at 20-04-48 Residential properties in Kitisuru to let.png' />
        <ProjectImage link='https://fastforty-importers-and-exporters.vercel.app/' src='/Screenshot 2024-06-15 at 20-02-43 Importing and Exporting company based in Kenya.png' />
        <ProjectImage link='https://pnjogu-467d3.web.app' src='/Screenshot 2024-06-15 at 20-05-30 React App.png' />
        <ProjectImage link='https://decor254.vercel.app/' src='/Screenshot decor.PNG' />
        <ProjectImage link='https://decor254.vercel.app/' src='/Caveman screenshot.PNG' />
      </section>
    </main>
  )
}

export default Projects