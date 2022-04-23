import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center'>
            <p className='text-xl'>{`Resume © ${new Date().getFullYear()}  Created by Zihadul Islam`}</p>
            </footer>
    );
};

export default Footer;