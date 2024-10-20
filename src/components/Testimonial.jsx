import React from "react";
import styled from "styled-components";

function Testimonial({ user, content, username }) {
  const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 30px;
  `;
  const Div = styled.div`
    width: 40vw;
    height: 100%;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(146, 36, 255, 0.4);
    padding: 20px;
    margin: 20px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `;
  const Content = styled.p`
    width: 100%;
    height: 100%;
    align-text: center;
    padding: 12px;
  `;
  return (
    <Div>
      <div
      style={{
        display:'flex',
        alignItems:'center',
        justifyContent: 'space-between',
        gap:10
      }}
      >
        <Image src={user} alt="user photo" />
        <h3>{username}</h3>
      </div>
      <Content>{content}</Content>
    </Div>
  );
}

export default Testimonial;
