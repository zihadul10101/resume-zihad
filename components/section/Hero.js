import React from 'react';
import bg from '../../public/assets/img/hero-bg.jpg'
import TypeAnimation from 'react-type-animation';

const Hero = () => {
  
    return (
        <section id="hero" className="bg-scroll bg-slate-600 " style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            width: '100%',
            height: '100vh',
            backgroundAttachment: 'fixed',

        }}  >
   
            <div className="pt-60 text-center lg:pt-0 lg:text-left lg:text-center lg:pt-72 overflow-hidden">
                <h1 className="font-extrabold  text-green-500  text-5xl ">Zihadul Islam</h1>
                <p className="font-bold  text-white  text-xl ">I am <TypeAnimation
                    cursor={false}
                    sequence={['Web Developer', 1000, 'React Developer', 2000, 'Frontend Developer', 1000, 'Full Stack Developer', Infinity]}
                    wrapper="span"
                    className="border-b-4 border-green-600 "
                /></p>
            </div>
            
        </section>
    );
};

export default Hero;