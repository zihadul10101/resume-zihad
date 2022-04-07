import React from 'react';
import bg from '../../public/assets/img/hero-bg.jpg'
import TypeAnimation from 'react-type-animation';
import Particles from "react-tsparticles";
const Hero = () => {
    const particlesInit = (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };
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
             <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
            <div className="pt-60 text-center lg:pt-0 lg:text-left lg:text-center lg:pt-72 overflow-hidden">
                <h1 className="font-extrabold  text-white  text-6xl ">Zihadul Islam</h1>
                <p className="font-bold  text-white  text-xl ">I am <TypeAnimation
                    cursor={false}
                    sequence={['Web Developer', 1000, 'React Developer', 2000, 'Frontend Developer', 1000, 'Full Stack Developer', 2000]}
                    wrapper="span"
                    className="border-b-4 border-green-400 tracking-widest pb-1"
                /></p>
            </div>
            
        </section>
    );
};

export default Hero;