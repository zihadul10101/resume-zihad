import React, { useState } from 'react';
import Image from 'next/image';
import profileImg from '../../public/assets/img/profile-img.jpg';
import { headerLinkDb, soicalLinkDb } from '../../db/db.local';
import { Link } from 'react-scroll';
import { FaAngleRight } from 'react-icons/fa'
const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <section  className="fixed">
            <div
                className={` ${open ? "w-72 fixed " : "w-20 "
                    } bg-dark-purple h-screen p-5   pt-8 relative duration-300`}
            >
                <FaAngleRight
                    className={`absolute text-white text-2xl  cursor-pointer -right-3 top-9 w-7 bg-blue-600
                                border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />

                <div className="text-center gap-x-4 ">
                    <Image src={profileImg} className={`flex rounded-full cursor-pointer duration-500 ${open && "rotate-[360deg]"
                        }`} width={130} height={130} />
                    <h1 className={`text-white origin-left line- font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}>Zihadul Islam</h1>
                    <div className={`w-full flex  gap-2 mx-auto ${!open && "flex-col"
                        }`}>
                        {
                            soicalLinkDb.map(soical => (

                                <a key={soical.id} href={soical.link} className="text-xl mx-auto p-3 text-white text-center hover:bg-blue-600  rounded-full "> {soical.icon} </a>

                            ))
                        }
                    </div>

                </div>
              
                    <ul className="mx-auto py-5">
                        {
                            headerLinkDb.map(item => (
                                <li key={item.id}>
                                    <Link href={item.link} 
                                     to={item.to}
                                     activeClass="active"
                                     spy={true}
                                     smooth={true}
                                     duration={200}
                                    >
                                        <a className=" text-xl cursor-pointer flex items-center gap-x-5 mx-auto text-white p-3 text-center  rounded-full">
                                            <span className="hover:text-cyan-600 text-2xl">{item.icon}</span>
                                            <span className={`hover:text-cyan-600 ${!open && "hidden"} origin-left duration-200`} >{item.name}</span></a>
                                    </Link>
                                </li>
                            ))
                        }

                    </ul>
              

            </div>

        </section>
    );
};

export default Header;