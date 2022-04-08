import React,{ useState,useEffect} from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'
const BacktoTop = () => {
    const [visibility, setVisibility] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 })
  
    const handleCLick = () => {
      setPosition({ ...position, position: { top: 0, left: 0 } })
      window.scroll({
        top: position.top,
        left: position.left,
        behavior: 'smooth'
      })
    }
    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        e.preventDefault()
        if (window.scrollY > 700) {
          setVisibility(true)
        }
        else {
          setVisibility(false)
        }
      })
    })
  
   
    return (
        <div className='z-40'>
        <span onClick={() => handleCLick()}
          className=
          {`${visibility ? 'right-0 bottom-0 fixed z-10 ' : ''}`}
        >
          <AiOutlineArrowUp data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className="relative w-12 h-12 text-white p-3 bg-cyan-600 rounded-full mr-3 mb-5 drop-shadow-lg ring-gray-800  ring-8 cursor-pointer text-4xl" />
        </span>
      </div>
    );
};

export default BacktoTop;