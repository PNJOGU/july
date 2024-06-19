import React from 'react'
import { Buttonlink } from '@/app/Components/ButtonLink'

import Link from 'next/link'
const Contact = () => {
  return (
    <main className='contact'>
          <section >
              <p>Contact me</p>
              <h4>Am here to serve you</h4>
              <p>I am a software developer with requisite skills you are looking for</p>
              <div>
                <p>Monday-Friday 7a.m-6p.m Nairobi time</p>
                <p>Saturday 8 a.m-5p.m Nairobi time</p>
                <p>Sunday 9 a.m-4p.m Nairobi time</p>
              </div>
              <div className='contactBtns'>
                  <Buttonlink name='Call 0724767731' link='tel:0724767731'/>
                  <button className='lastbtn'><Link href={'https://wa.me/254724767731'}>Live chat</Link></button>
              </div>
          </section>
    </main>
 
  )
}

export default Contact