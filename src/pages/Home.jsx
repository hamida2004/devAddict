import React, { useContext } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { ThemeContext} from "../hooks/useContext/useContext";

function Home() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    width: 100%;
    background-color: ${isDarkMode ? "#f5fefb" : "#001117"};
    color: ${isDarkMode ? "#001117" : "#f5fefb"};
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
  `;
  return (
    <Container>
      <Nav setIsDarkMode={setIsDarkMode} />
      <Content />
      <Footer />
    </Container>
  );
}

export default Home;
