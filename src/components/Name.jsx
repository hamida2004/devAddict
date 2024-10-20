import React from "react";
import styled from "styled-components";

function Name({name}) {
    const Div = styled.div`
    width:fit-content;
    max-width: 90%;
    padding:0px 40px;
    background-color : rgba(146, 36, 255, 0.6);
    position: absolute;
    height: 40px;
    top : 20px;
    left: 20px;
    display:flex;
    align-items:center;
    justify-content: center;
    border-radius: 16px;
    color:#001117;
    font-weight: 500;
    box-shadow: 1px 1px 4px rgba(146, 36, 255, 0.25) 

    `
    const P = styled.p`
    line-clamp: 1;
    overflow: hidden`
  return (
    <Div>
      <P>{name}</P>
    </Div>
  );
}

export default Name;
