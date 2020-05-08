import React, { useEffect } from 'react';

const About = ({ enterCallback }) => {

    useEffect(() => {
        enterCallback('About');
    }, []);


    return (
        <div className="about">
            <h2 className="aboutTitle">HERES THE ABOUT</h2>
        </div>
    );
};

export default About;
