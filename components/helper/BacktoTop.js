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
        <div className='z-50'>
        <span onClick={() => handleCLick()}
          className=
          {`${visibility ? 'right-0 bottom-0 fixed z-10 ' : ''}`}
        >
          <AiOutlineArrowUp  className="relative animate-bounce w-12 h-12 text-white p-3 bg-green-500 rounded-full mr-3 mb-5 drop-shadow-lg ring-slate-700  ring-8 cursor-pointer text-4xl" />
        </span>
      </div>
    );
};

export default BacktoTop;