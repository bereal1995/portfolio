import React from 'react';
import styled from "styled-components";
import {Overlay, SectionContainer} from "../Layout/Layout.Styled";

function Visual({image}) {

  return (
      <Container name={'home'}>
        <Image style={{backgroundImage:`url(${image})`}}/>
        <Overlay alpha={0.4}/>
        <Text>
            <h2>hello world,</h2>
            <h1>I'm Frontend</h1>
        </Text>
      </Container>
  )
}
const Container = styled(SectionContainer)`
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: 50% / cover no-repeat;
`;

const Text = styled.div`
    position: relative;
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    h2 {
      font-size: 26px;
      margin-bottom: 20px;
      font-weight: 400;
    }
    h1 {
      font-size: 55px;
      font-weight: 500;
    }
`;


export default Visual;