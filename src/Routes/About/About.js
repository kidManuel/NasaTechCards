import React, { useEffect } from 'react';
import { Title, Paragraph, TechportTheme } from '../../Components';

import styles from './styles';
import {
    title1,
    title2,
    title3,
    text1,
    text2,
    text3,
    photoAltText,
} from './const';

const About = ({ enterCallback }) => {
    useEffect(() => {
        enterCallback('About');
    }, []);

    const classes = styles();
    const theme = TechportTheme();
    const { aboutBody, teamPhoto, dataColumn } = classes;
    const { title, textRead } = theme;

    return (
        <div className={aboutBody}>
            <img className={teamPhoto} alt={photoAltText} src="/media/team-2017.jpg" />
            <div className={dataColumn}>
                <Title text={title1} customClass={title} />
                <Paragraph text={text1} customClass={textRead} />
            </div>
            <div className={dataColumn}>
                <Title text={title2} customClass={title} />
                <Paragraph text={text2} customClass={textRead} />
            </div>
            <div className={dataColumn}>
                <Title text={title3} customClass={title} />
                <Paragraph text={text3} customClass={textRead} />
            </div>
        </div>
    );
};

export default About;
