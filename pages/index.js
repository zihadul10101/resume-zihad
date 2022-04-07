import React from 'react';
import Header from '../components/header/Header';
import Artical from '../components/section/Artical';
import Contact from '../components/section/Contact';
import Hero from '../components/section/Hero';
import About from '../components/section/About';
import Portfolio from '../components/section/Portfolio';
import Resume from '../components/section/Resume';
import Service from '../components/section/Service';
import Skills from '../components/section/Skills';
import Footer from '../components/footer/Footer';
import BacktoTop from '../components/helper/BacktoTop';



export default function Home({skills}) {

  return (
    <>
      <div className="flex">
        <Header />
        <Hero />
      </div>

      <main className="">
        <About />
        <Skills data={skills}/>
        <Resume />
        <Portfolio />
        <Service />
        <Artical />
        <Contact />
        <Footer />
      </main>
       <BacktoTop />
    </>

  )
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/skill')
  const skills = await res.json()
  return {
    props: {
      skills,
    },
  }
}