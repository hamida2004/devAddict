import React from "react";
import styled from "styled-components";
import Name from "./Name";
import { Link } from "react-router-dom";

function Project({ name, photo, link }) {
  const Section = styled(Link)`
    width: 16vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: 1px 1px 5px rgba(146, 36, 255, 0.25);
    border-radius: 16px;
    margin: 20px;
    overflow: visible;
    z-index: 1; /* Set a higher z-index for the section */

     @media (max-width: 768px) {
     height: 30vh;         
     width: 30vw;
     }
  `;

  const Shadow = styled.div`
    width: 16vw;
    height: 40vh;
    transform: rotate(16deg) translateX(20px);
    background-color: rgba(146, 36, 255, 0.6);
    position: absolute;
    border-radius:16px;
    z-index: 0;
    /* Set a lower z-index for the shadow */

    @media (max-width: 768px) {
    height: 30vh;
    width: 30vw;
    }
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px; /* Add border radius to the image */
  `;
  const Div = styled.div`
   &:hover {
    transition: transform 0.3s ease;
    transform : scale(1.4,1.4);
    }
  `

  return (
    <Div>
      <Shadow />
      <Section to={link} target="_blank">
        <Image src={photo} />
        <Name name={name} />
      </Section>
    </Div>
  );
}

export default Project;
