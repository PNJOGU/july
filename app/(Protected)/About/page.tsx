import React from 'react'
import Image from "next/image";

function About() {
  return (
    <main>
        <section className='aboutFirstSec'>
          <div>
              <h2>About me</h2>
              <p>NPN.Dev is a software developer who is specialized in building well crafted and appealing user-interfaces that deliver good user experiences. I develop backend technologies too,which enable software applications interact with web servers and databases. </p> 
          </div>
            <Image src={'/DV LOT.jpg'} alt="paul njogu picture" width='200' height='200' style={{width:'auto',height:'auto'}} />
        </section>
        <section className='aboutSecondSec'>
              <h2>Values</h2>
              <div>   
              <Image src={'/values.jpg'} alt="core values" width='385' height='385' style={{width:'auto',height:'auto'}} />
                 <ul>
                      <h3>Core Principles</h3>
                      <li>Committment</li>
                      <li>Integrity</li>
                      <li>Effective communication</li>
                      <li>Teamwork</li>
                      <li>Transparency</li>
                      <li>Accountability</li>
                      <li>Innovation</li>
                      <li>Honesty</li>
                 </ul>
              </div>
       
        </section>
        <section className='aboutThirdSec'>
              <h2>Mission and Vision Statements</h2>
              <section className='aboutThirdSubSec'>
                      <div>
                          <h3>Mission</h3>
                          <p>To provide reliable and valuable services to my clients</p>
                      </div>
                      <div>
                          <h3>Vision</h3>
                          <p>To immensely contribute to the growth of open source community and software engineering as a whole</p>
                      </div>
              </section>
        </section>
        <section>
            <h2>My Tech stack</h2>
            <p></p>
            <section className='aboutForthSec'>
                <div>
                    <h4>Frontend Technologies</h4>
                    <Image src={'/web dev.jpeg'} alt="core values" width='300' height='300' style={{width:'auto',height:'auto'}} />
                    <ul>
                        <li>Figma</li>
                        <li>React.js(Nextjs)</li>
                        <li>Vanilla javaScript,HTML5,CSS3</li>
                        <li>Typescript</li>
                        <li>React native</li>
                        <li>Material UI</li>
                        <li>Testing tools-Jest,React testing-library</li>
                    </ul>
                </div>
                <div>
                    <h4>Backend Technologies</h4>
                    <Image src={'/backend.jpg'} alt="core values" width='300' height='300' style={{width:'auto',height:'auto'}} />
                    <ul>
                        <li>Nodejs</li>
                        <li>Express.js</li>
                        <li>Apis- Graphql,Rest Apis(axios,fetch)</li>
                        <li>Google cloud service</li>
                        <li>BAAS-Firebase,Supabase</li>
                        <li>Oracle SQL,MongoDB</li>
                        <li>Hosting providers-Vercel,Netlify,firebase hosting</li>
                    </ul>
                </div>
            </section>
        </section>
    </main>
  )
}

export default About