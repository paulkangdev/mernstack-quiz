import React from 'react';
import {
    Link,
} from 'react-router-dom';
import styled from 'styled-components';

const FrontPage = () => (
        <>        
            <Link style={{textDecoration:'none'}} to="/main">
                <FrontStyle>
                    <div>Welcome to the Quiz Factory:</div>
                    <div>Click Anywhere to Begin</div>
                </FrontStyle>
            </Link>
        </>    
    );

export default FrontPage;

const FrontStyle = styled.section`
    background: blue;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 4rem;
    position:relative;
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    padding: 0;
    align-items: center;
    justify-content: center;
    >div{
        display:block;
    }
    
`
    