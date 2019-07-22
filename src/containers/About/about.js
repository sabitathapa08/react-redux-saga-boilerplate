import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class About extends Component{
    render() {
        return(
            <div>
                <h1>About Page</h1>
                <div><Link to="/">Go Back</Link></div> 
            </div>
        )
    }
};

export default About;