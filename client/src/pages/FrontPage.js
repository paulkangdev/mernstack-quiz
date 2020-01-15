import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch
} from 'react-router-dom';

const FrontPage = () => (
        <>        
            <Link to="/main">
                <p>Welcome to the Quiz Factory</p>
                <div>Where greatness Awaits</div>
            </Link>
        </>    
    );

export default FrontPage;
