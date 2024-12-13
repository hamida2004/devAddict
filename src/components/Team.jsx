import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logoWhite.png";
import hamida from "../assets/images/hamida.jpg";
import nessrine from "../assets/images/nessrine.jpg";
import { Link } from "react-router-dom";
import Name from "./Name";
function Team() {
  const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 120px;
    height: 100vh;
    position: relative;
    flex-direction: column;
  `;
  const P = styled.p`
    font-size: 2.4rem;
    letter-spacing: 2px;
    font-weight: 200;
    margin-bottom: 16px;
  `;
  const DivLeft = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 5px #9224ff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotateX(16deg) rotateY(24deg);
    position: relative;
    transform-style: preserve-3d;
  `;
  const DivRight = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: -1px 1px 5px #9224ff;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotateX(-16deg) rotateY(24deg);
    transform-style: preserve-3d;
  `;
  const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 16px;
  `;
  const StyledLink = styled.a`
    width: 32%;
    height: 56vh;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `;
  return (
    <Section>
      <P>Our team members </P>
      <h4>we are enthusiast to build your interfaces</h4>
      <div
        style={{
          height: "fit-content",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginTop: 80,
        }}
      >
        <StyledLink href="https://hamida2004.github.io/Portfolio/">
          <DivLeft>
            <Name name={"MEHDA Nesrine"} />
            <Image src={nessrine} />
          </DivLeft>
        </StyledLink>
        <StyledLink href="https://hamida2004.github.io/Portfolio/">
          <DivRight>
            <Name name={"DADDA Hamida"} />
            <Image src={hamida} />
          </DivRight>
        </StyledLink>
      </div>
    </Section>
  );
}

export default Team;
