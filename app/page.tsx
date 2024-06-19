
import React from "react";
import Image from "next/image";
import Images from "./utils/Images/page";
import { Project } from "./utils/Project";
import { Buttonlink } from "./Components/ButtonLink";

export default function Home() {

  return (
    <main className="main">
      <section className="introduction">
        <div>
            <h1>Build robust,SEO friendly React applications today</h1>
            <p>Am <span className="colorBlue">Paul Njogu</span>, a software developer based in Kenya. Am passionate about creating well designed and fully functioning software applications</p>
            <Buttonlink name="View my projects" link="/Projects"/>
        </div>
        <div>
        <Image src={'/DV LOT.jpg'} alt="paul njogu picture" width='200' height='200' style={{width:'auto',height:'auto'}} />
        </div>
      </section>
      <section className="homeImagesSection">
          <Images />
      </section>
      <section className="homeWhatIdo">
          <h2>What I do</h2>
          <div>
              <p>I build fullstack applications using above technologies with key consideration on intuitive user interfaces that result in great user experience and good SEO performance. Client&apos;s preferences superdes my jugdement. Continous communication is key to successful project completion</p>
              <Image src={'/online.jpg'} alt="online picture" width='384' height='384' style={{width:'auto',height:'auto'}} />
          </div>
      </section>
      <section className="homeThirdSec">
          <h2>How I pertake projects</h2>
          <section className="homeHowIdo">
              <div>
                  <h3>Client-Developer discussions</h3>
                  <p>Entails getting project requirements and agreeing on contractual terms</p>
              </div>
              <div>
                  <h3>Application Development</h3>
                  <p>Actual design and code implementation. Periodic communication with the client to show progress</p>
              </div>
              <div>
                  <h3>Software testing</h3>
                  <p>Continous verification to check if the project is functioning as expected</p>
              </div>
              <div>
                  <h3>Deployment and maintenance</h3>
                  <p>Publishing the application to a web server and optional maintenance of codebase</p>
              </div>
          </section>
      </section>
      <section className="homeMyProjects">
            <h2>My Projects</h2>
            <p>Below are some of the projects I have undertaken</p>
            <section>
                <Project link="https://softhome-e8de2.web.app/" p="Softhome is a Real estate application that was built to allow landlords in Kitisuru area post vacant and land property pictures and secure prospecive clients. New version is underway" h="Softhome" lname="Softhome website"/>
                <Project link="https://fastforty-importers-and-exporters.vercel.app/" p="Fastforty is a company which specializes in car importing and exporting based in Kenya. This application enables them to post new car arrivals and tap in to the large online presence" h="Fastforty" lname="Fastforty website"/>
                <Project link="https://pnjogu-467d3.web.app" p="NPN website was my first react project built with create-react-app. NPN.DEV is fully next.js project" h="NPN" lname="NPN website"/>
                <Project link="https://npn.netlify.app/" p="NPN was my first website developed using HTML5,CSS3, Vanilla javaScript and JQuery before shifting to using React framework" h="NPN" lname="NPN website"/>
          
            </section>
      </section>
      <section className="homeContactme">
          <h2>How to contact me</h2>
          <p>Interested in procuring software development services? Kindly reach out to me. Let&apos;s craft your dream project to reality</p>
          <Buttonlink name="Contact me" link="mailto:paulnjogu2006@gmail.com"/>
      </section>
      <section className="Review">
            <div>
                <h2>Client&apos;s reviews</h2>
                <Buttonlink name="Add review" link="./Reviews"/>
            </div>
      </section>
     
    </main>
  );
}
