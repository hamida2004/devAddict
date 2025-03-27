import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import img1 from "../assets/images/img1.png";
import Button from "./Button";
function Main() {
  const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px;
    height: 100vh;
    position: relative;
     @media (max-width: 768px) {
      flex-direction: column;
      padding: 20px;
      margin: 80px 0px;
  }
  `;
  const Div = styled.div`
    height: 100%;
    flex-direction: column;
    width: 50%;
    display: flex;
    padding: 40px;
    letter-spacing: 4px;

    @media (max-width: 768px) {
    width: 100%;
    }
  `;

  const ImgDiv = styled(Div)`
  @media (max-width: 768px) {
  width:0px;
  height:0px;
  }
  `
  const Image = styled.img`
    width: 80%;
  
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      opacity: 0.2;
      width:40%;
    }

  `;
  const Img = styled.img`
    width: 3rem;
    @media (max-width: 768px) {
    width: 2rem;
    }
  `;
  const H1 = styled.h1`
    font-size: 3rem;
    margin: 0px 20px;
    @media (max-width: 768px) {
    font-size: 2rem;
    display: flex;
    }
  `;
  const P = styled.p`
    font-size: 2.4rem;
    letter-spacing: 2px;
    font-weight: 200;
    margin-bottom: 80px;

    @media (max-width: 768px) {
    font-size: 1.4rem;}
  `;
  return (
    <>
      <Section>
        <Div
          style={{
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <Img src={left} alt="left <" />
            <H1>
              <span
                style={{
                  color: "#00555e",
                }}
              >
                D
              </span>
              <span
                style={{
                  marginRight: 20
                }}
              >
                ev{" "}
              </span>
              <span
                style={{
                  color: "#9224FF",
                }}
              >
                A
              </span>
              ddict
            </H1>
            <Img src={right} alt="left <" />
          </div>
          <P>Here you find code flavored by passion and innovation</P>
          <Button text={"Discover"} />
        </Div>
        <ImgDiv
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image src={logo} alt="bg-image" />
        </ImgDiv>
        {/* <Image src={logo} alt="bg-image" /> */}

      </Section>
      <Section
        style={{
          height: "60vh",
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          marginBottom: 120,
        }}
      >
        <img
          src={img1}
          alt="image-bg"
          style={{
            height: "120%",
            position: "absolute",
            top: -100,
            right: -40,
            zIndex: 0,
            opacity: 0.8,
          }}
        />
        <Div>
          <P
            style={{
              position: "relative",
              zIndex: 200,
            }}
          >
            Transform your ideas to reality
          </P>
        </Div>

      </Section>
    </>
  );
}

export default Main;
