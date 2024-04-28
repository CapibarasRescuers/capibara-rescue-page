import React from "react";
import { useTranslation } from "react-i18next";
import capibaraLogoGif from "../assets/carpincho.gif";
import ringPng from "../assets/ring.png";
import styled, { keyframes } from "styled-components";

const rotateRing = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Ring = styled.img`
  width: 40%;
  height: 40%;
  background: url(${ringPng});
  background-size: cover;
  padding: 40px;
  animation: ${rotateRing} 5s linear infinite;
`;

export default function Logo() {
  return (
    <>
      <Ring src={capibaraLogoGif} />
    </>
  );
}
