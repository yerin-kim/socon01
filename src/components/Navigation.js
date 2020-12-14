import React from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to ="/">Home</Link>
            <Link t0="/about">About</Link>
        </div>
    );
}
export default Navigation;