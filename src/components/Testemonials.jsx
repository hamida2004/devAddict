import React from "react";
import styled from "styled-components";
import { testimonials } from "../assets/data/data";
import left from "../assets/images/left.png";
import right from "../assets/images/right.png";
import Testimonial from "./Testimonial";
const Section = styled.section`
  width: 100%;
  display: flex;
  padding: 20px;
  height: fit-content;
  position: relative;
  flex-direction: column;
  height: 80vh;
  margin: 120px 0px;

  @media (max-width: 768px) {
  flex-direction: column;
        padding: 40px;
        margin: 0px;
  }



`;
const P = styled.p`
  font-size: 2.4rem;
  letter-spacing: 2px;
  font-weight: 200;
  margin-bottom: 16px;
  margin-left: 120px;

  @media (max-width: 768px) {
  margin:0px
  }
`;
const Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 40px;
  letter-spacing: 4px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Img = styled.img`
height: 80%;

@media (max-width: 768px) {
height: 20%;
width: 20%;
}
`;
function Testemonials() {
  return (
    <Section>
      <P>Testimonials </P>
      <Div>
        <Img src={left} alt="left" />
        {testimonials
          .sort((a, b) => b.rate - a.rate) // Sort by rate in descending order
          .slice(0, 3)
          .map((element, index) => {
            return (
              <Testimonial
                key={index}
                user={element.userImage}
                content={element.testimonialContent}
                username={element.username}
              />
            );
          })}
        <Img src={right} alt="right" />
      </Div>
    </Section>
  );
}

export default Testemonials;
