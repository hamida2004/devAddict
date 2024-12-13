import React from "react";
import styled, { keyframes } from "styled-components";

// Typing animation keyframes
const typing = keyframes`
  from { max-width: 0; }
  to { max-width: 100%; }
`;

// Blinking cursor keyframes
const blink = keyframes`
  50% { border-color: transparent; }
`;

// Styled component for the typewriter effect
// Styled component for the typewriter effect with line clamping
const TypewriterText = styled.div`

  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black; // Create the cursor effect
  display: inline-block; // Ensure the container fits the text
  max-width: 0; // Start from 0 width
  animation: ${typing} 4s steps(30, end) forwards,
    ${blink} 0.75s step-end infinite; // Typing and blinking animations

  /* Add ellipsis and clamp the text to 2 lines */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limit the text to 2 lines */
  line-clamp: 2; /* Standard syntax */
  overflow: hidden; /* Hide overflowing text */
  white-space: normal; /* Allow normal wrapping of text */
`;

// Main component to render the typing effect
const TypingEffect = ({ text }) => <TypewriterText>{text}</TypewriterText>;

export default TypingEffect;
