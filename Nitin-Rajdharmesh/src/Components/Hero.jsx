import React from 'react'
import styled from "styled-components"
import NitinPro from "./images/NitinLLine.png";


const Hero = () => {
  return (
   <HeroContainer id='Home'>
    <div className='design'>
        <h1>Desginer</h1>
        <p>Creative designer turning <br /> ideas into clean and modern visuals.”.</p>
    </div>

    <div className="pro">
        <img src={NitinPro} alt="Hero" />
    </div>

    <div className='code'>
        <h1>{"Coder</>"}</h1>
        <p>“Front-End developer <br /> who writes clean, elegant code.”</p>
    </div>



   </HeroContainer> 
)
}

export default Hero;

const HeroContainer = styled.div`
    display: flex;
    justify-content:center;
    gap:2px;
    align-items: center;
    height: calc(100vh - 120px);
    /* border: 1px solid green; */
    /* width: 900px; */
    margin: 0px auto;
    background-color:#fdf7f7;
 box-shadow:0px  15px 20px gray;
    

   .pro {
  position: relative; /* parent relative for ::before positioning */
  width: 500px;

  img {
    height: 558px;
    width: 500px;
    display: block;
    filter: drop-shadow(5px 5px 5px black);
    position: relative;
    z-index: 2; /* above the text */
  }
}

    h1{
        font-size: 50px;
        /* color: #fdf7f7; */
        /* text-shadow: 5px 10px 15px black; */
        color: black;
    }
    p{
        width: 250px;
        color: gray;
        font-style: italic;
    }
    .design{
        position: relative;
        left: 50px;
       position: relative;
       }
    .code{
      right: 50px;
    }

    @media (min-width:1600px) and (min-height:992px)
    {
        height:calc(100vh - 100px);
        .pro{
            img{
                width: 700px;
                height: 850px;
            }
        }

         h1{
        font-size: 50px;
        /* color: #fdf7f7; */
        /* text-shadow: 5px 10px 15px black; */
        color: black;
    }
    p{
        width: 250px;
        color: gray;
        font-style: italic;
    }
    .design{
        position: relative;
        left: 0px;
       
       }
    .code{
        position: relative;
      right:-70px;
    }

    }

`