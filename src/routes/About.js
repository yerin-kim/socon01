import react from 'react';
import './About.css';

function About(props){
    console.log(props)
    return (
        <div className="about_container">
            <span>
                "Freedom is the Freedom to say that two plus two make four.
                if that is granted, all else
                follows."
            </span>
            <span>-George Orwell, 1984</span>
        </div>
    );
}

export default About;