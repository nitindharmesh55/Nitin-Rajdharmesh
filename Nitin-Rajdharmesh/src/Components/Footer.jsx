import { IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import React from 'react'

export const Footer = () => {
  return (
    <FooterPrint>
        <div className="logo">
          <Special as={IoIosArrowUp} />
        </div>

        <div className="links">
            <p>@ 2025 Nitin-Rajdharmesh</p>
            <div>
                <a href="#about">About</a>
                <a href="#project">Project</a>
                <a href="#skill">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </FooterPrint>
  )
}


const FooterPrint = styled.footer`
background-color: #f5f5f5;
padding: 10px;
display: flex;
flex-direction: column;


.links{
    display: flex;
    align-items: center;
    justify-content:space-between;

    p{
        color: #d4d4d4;
        font-size: 20px;
    }

    a{
        text-decoration: none;
        color: black;
        margin: 5px;
    }
}
    
`

const Special = styled.div`
    background-color: #f5f5f5;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
     text-align: center;
    width: 120px;
    height: 100px;
    border-radius:50%;
    position: relative;
    left: 42%;
    top:-50px;
    transition: all ease-in 1s;

    &:hover{
        top:-70px;
    }
`