import React from 'react';
import styled from "styled-components";
import {BsArrowUp} from "react-icons/bs";
import {Color, setBoxShadow} from "../../../styled/Util.Styled";
import {scrollToTop} from "../../../lib/Scroll";
import {media} from "../../../styled/Responsive.Styled";

function ButtonToTop() {

  return (
      <Container onClick={scrollToTop}>
          <BsArrowUp/>
      </Container>
  )
}
const Container = styled.div`
  position: fixed;
  right: 60px;
  bottom: 80px;
  z-index: 500;
  display:flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${Color.primary};
  color: #fff;
  font-size: 26px;
  box-shadow: ${setBoxShadow(1)};
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    box-shadow: ${setBoxShadow(3)};
    background: #1489ff;
  }
  &:active {
    transition: 0.15s;
    box-shadow: ${setBoxShadow(1)};
    background: #1083f6;
    bottom: 79px;
  }
  ${media.lessThan("md")`
      right: 30px;
      bottom: 40px;
      &:active {
        bottom: 39px;
      }
  `};
`;


export default ButtonToTop;