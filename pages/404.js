import React from 'react';
import Image from 'next/image';
import Photo from '../public/assets/img/notfound/not.webp'
import Link from 'next/link';
const PageNotFound = () => {
    return (
        <section className="bg-white dark:bg-orange-600 flex relative z-20 items-center">
        <div className="container mx-auto px-10 py-10  flex flex-col justify-between items-center relative">
            <div className="block w-full text-center mx-auto relative">
                <Image src={Photo} alt="sindabadit" className="max-w-xs md:max-w-2xl m-auto" />
            </div>
            <div className="flex items-center justify-center mx-auto px-10 py-10 ">
                <Link href="/">
               <a  className="uppercase py-2 px-4 bg-orange-600 border-2 border-transparent text-white text-md mr-4 hover:bg-orange-700">     Back to Home</a>
                </Link>
                <Link href="/contact" >
                   <a className="uppercase py-2 px-4 bg-transparent border-2 border-orange-600 text-orange-600 dark:text-white hover:bg-orange-600 hover:text-white text-md"> Contact us</a>
                </Link>
            </div>
        </div>
    </section>
    );
};

export default PageNotFound;