'use client'
import React, { useState } from 'react';
import Link from 'next/link';
export const Project = ({p,link,h,lname}:{p:string,link:string,h:string,lname:string}) => {
  const [click,setClick] = useState(false);

  const handleProjectClick = () => {
    setClick(!click);
  }
  return (
    <>
       <section onClick={handleProjectClick} className='projectSub'>
          <div>
              <p>{h}</p>
              <p>+</p>
          </div>
          {click ? (<p>{p} <span><Link href={link}>{lname}</Link></span></p>) : <span></span>}
       </section>
       <hr/>
    </>
  )
}

