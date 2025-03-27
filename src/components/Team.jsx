import React from "react";
import styled from "styled-components";
import hamida from "../assets/images/hamida.jpg";
import nessrine from "../assets/images/nessrine.jpg";
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
         @media (max-width: 768px) {
          padding: 40px;
          margin: 80px 0px;}
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

    @media (max-width: 768px) {
    transform: rotateX(0deg) rotateY(0deg);
    height: 60%;
    }
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

    @media (max-width: 768px) {
    transform: rotateX(0deg) rotateY(0deg);
    height: 60%;
    }
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
    @media (max-width: 768px) {
    width: 40%;
    }
    &:hover {
      transform: scale(1.1, 1.1);
    }
      @media (max-width: 768px) {
      height: 40vh;
      }
  `;
  const Div = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 80px;

    @media (max-width: 768px) {
    gap:40px}
  `
  return (
    <Section>
      <P>Our team members </P>
      <h4>we are enthusiast to build your interfaces</h4>
      <Div
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
      </Div>
    </Section>
  );
}

export default Team;
