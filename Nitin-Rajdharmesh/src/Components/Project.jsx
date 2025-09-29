import styled from "styled-components";
import AIlove from "./images/AI.png";
import space from "./images/spaceCraft.png";
import fight from "./images/codefihgt.png"


import React from 'react'

const Project = () => {
  return (
    <ProjectPart id="projects">
     <div className="somePart">
        <div className="Line"></div>
        <p>SOME OF MY LATEST PROJECTS</p>
        <div className="Line"></div>

     </div>

     {/* Project sections strt from here */}


     <ProjectContainer>
      <div className="card">
        <img src={AIlove} alt="Project Picture"/>
        <h2>My AI Web Design</h2>
        <p>Landing Page</p>
      </div>

      <div className="card">
        <img src={space} alt="Project Picture"/>
        <h2>Funn Figma Design</h2>
        <p>Landing Page</p>
      </div>


      <div className="card">
        <img src={fight} alt="Project Picture"/>
        <h2>My AI Web Design</h2>
        <p>Landing Page</p>
      </div>

     </ProjectContainer>

    </ProjectPart>
  )
}

export default Project;

const ProjectPart = styled.section`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 8rem;
margin-bottom: 5rem;


.somePart{
    display: flex;
    align-items: center;
    .Line{
        width:200px;
        height: 2px;
        background: gray;
        border-radius: 5px;
    }
    p{
        color: gray;
        font-size: 24px;
    }
}
    
`

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 2rem;

  .card{
    width: 280px;
    height: 260px;
    border: 2px solid rgba(212, 212, 212, 0.5);
    padding: 20px;
     display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 15px;
      box-shadow: 3px 3px 2px rgba(0,0,0, 0.5);

      &:hover{
       box-shadow: 3px 3px 10px rgba(5, 3, 3, 0.5);
}

   
    img{
      width: 250px;
      height: 150px;
      border-radius: 12px;
      box-shadow: 2px 1px 3px black;
     
    }

    h2{
      color: gray;
      text-align: left;
      margin-top: 5px;
    }
    p{
      color: gray;
    }
  }
`