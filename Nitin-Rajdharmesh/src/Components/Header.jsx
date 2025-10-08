import React from "react";
import styled from "styled-components";
import Logo from "./images/logo.png";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6"; // or fa

const Header = () => {
  return (
    <NavBar>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="SocialLinks">
        <SocialIcon as={FaInstagram} />
        <SocialIcon as={FaTwitter} />
        <SocialIcon as={FaLinkedinIn} />
        <SocialIcon as={FaFacebookF} />
      </div>
    </NavBar>
  );
};

export default Header;

/* ---------- Styled Components ---------- */

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0);
  padding: 20px;
  width: 100%;
  height: 100px;

  .logo img {
    width: 200px;
    height: 200px;
  }

  .links a {
    margin: 10px;
    text-decoration: none;
    color: white;
    font-size: 18px;
    transition: 0.3s ease;

    &:hover {
      color: gray;
    }
  }

  .SocialLinks {
    display: flex;
    gap: 24px;
  }

  @media (max-width: 1600px) and (max-height: 992px) {
    max-width: 100%;
    justify-content: space-around;
    margin: 0px auto;
  }
`;

/* ---------- Reusable Social Icon ---------- */
const SocialIcon = styled.div`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: gray;
  }
`;
