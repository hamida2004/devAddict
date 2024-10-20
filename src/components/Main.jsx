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
  `;
  const Div = styled.div`
    height: 100%;
    flex-direction: column;
    width: 50%;
    display: flex;
    padding: 40px;
    letter-spacing: 4px;
  `;
  const Image = styled.img`
    width: 80%;
  `;
  const Img = styled.img`
    width: 3rem;
  `;
  const H1 = styled.h1`
    font-size: 3rem;
    margin: 0px 20px;
  `;
  const P = styled.p`
    font-size: 2.4rem;
    letter-spacing: 2px;
    font-weight: 200;
    margin-bottom: 80px;
  `;
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
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
              ev{" "}
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
        <Div
          style={{
            justifyContent: "flex-end",

            alignItems: "center",
          }}
        >
          <Image src={logo} alt="bg-image" />
        </Div>
      </Section>
      <Section
        style={{
          height: "60vh",
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
