import React from "react";
import styled, { keyframes } from "styled-components";

function Button({ text , handleClick}) {
  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
  const GradientButton = styled.button`
    width: fit-content; /* Set width to fit content */
    padding: 8px 24px; /* Button padding */
    font-size: 1.6rem; /* Font size */
    color: white; /* Text color */
    border: none; /* Remove default border */
    border-radius: 16px; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    background: linear-gradient(
      270deg,
      #00555e,
      #9224ff
    ); /* Initial gradient */
    background-size: 180% 180%; /* Larger background for smooth animation */
    animation: ${gradientAnimation} 5s ease infinite; /* Apply animation */
    transition: transform 0.3s ease; /* Smooth transform transition */
    font-size: 1.8 rem;

  @media (max-width: 768px) {
  font-size: 1rem;
  padding: 8px 16px;
  }

    &:hover {
      transform: scale(1.05); /* Slightly scale up on hover */
    }
    box-shadow: 1px 1px 4px #9224ff;

    &:active {
      transform: scale(0.95); /* Slightly scale down when clicked */
    }
  `;
  return <GradientButton
  onClick={handleClick}
  >{text}</GradientButton>;
}

export default Button;
