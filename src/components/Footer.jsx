import React from "react";
import styled from "styled-components";
import code from "../assets/images/code.png";
import Button from "./Button";
import Social from "./Social";

const FooterDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Section = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  padding: 20px 120px;
  position: relative;
  flex-direction: column;

  @media (max-width: 768px) {
  padding: 40px;
  
  }
`;
const Img = styled.img`
  width: 60%;
  position: absolute;
  top: 25%;
  right: -5%;
`;

const P = styled.p`
  font-size: 2.4rem;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 16px;
`;

function Footer() {
  return (
    <>
      <Section>
        <P >Let's build your dream app </P>
        <h4
          style={{
            marginBottom: 60,
          }}
        >
          Invest in high-quality app development services.
        </h4>
        <Button text={"Proceed"} />
        <Social />
        <Img src={code} />
      </Section>
      <FooterDiv>
        <p>copyright2024</p>
      </FooterDiv>
    </>
  );
}

export default Footer;
