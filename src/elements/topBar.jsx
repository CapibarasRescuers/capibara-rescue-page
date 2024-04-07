import React from "react";
import styled from "styled-components";
import Slider from "react-infinite-logo-slider";

const Container = styled.div`
  width: 100%;
  height: 45px;
  background-color: #ffa146;
  display: flex;
  align-items: center;
  position: fixed;
  overflow: hidden;
  z-index: 100;
`;

const TopBar = () => {
  return (
    <Container>
      <Slider
        width="125px"
        duration={8}
        toRight={false}
        pauseOnHover={false}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {[...Array(15)].map((_, index) => (
          <Slider.Slide key={index}>
            <div key={index}>$CAPIBARA</div>
          </Slider.Slide>
        ))}
      </Slider>
    </Container>
  );
};

export default TopBar;
