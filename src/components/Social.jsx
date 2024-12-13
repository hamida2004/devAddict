import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Social() {
  const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 25%;
    margin: 40px 0px;
  `;
  const StyledLink = styled(Link)`
    box-shadow: 1px 1px 5px rgba(146, 36, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 8px;

    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  `;
  return (
    <Div>
      <StyledLink target="_blank">
        <FaFacebook size={32} />
      </StyledLink>
      <StyledLink target="_blank" to={'https://www.instagram.com/devaddict2024/#'}>
        <FaInstagram size={32} />
      </StyledLink>
      <StyledLink target="_blank" to={"https://x.com/Addict2000Dev"}>
        <FaTwitter size={32} />
      </StyledLink>

      <StyledLink target="_blank" to={'https://www.tiktok.com/@dev2000addict'}>
        <FaTiktok size={32} />
      </StyledLink>
    </Div>
  );
}

export default Social;
