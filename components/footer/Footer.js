import React from 'react';

const Footer = () => {
    return (
        <footer style={{"textAlign":"center"}}><p>{`Resume © ${new Date().getFullYear()}  Created by Zihadul Islam`}</p></footer>
    );
};

export default Footer;