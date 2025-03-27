import React, { useContext } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../hooks/useContext/useContext";

const NavBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 1px 1px 5px rgba(146, 36, 255, 0.25);
  z-index:999999;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
`;

// &:hover { }
function Nav() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    localStorage.setItem("darkTheme", newIsDarkMode); // Store the new value in localStorage
    // Calculate the new mode
    console.log(newIsDarkMode); // This will print the new value
    setIsDarkMode(newIsDarkMode); // Update the state
  };

  return (
    <NavBar>
      <Image src={logo} alt="logo" />
      <Button onClick={toggleTheme}>
        {isDarkMode ? (
          <FaMoon size={24} color="#001117" />
        ) : (
          <FaSun size={24} color="#f5fefb" />
        )}
      </Button>
    </NavBar>
  );
}

export default Nav;
