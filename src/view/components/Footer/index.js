import React from 'react';
import styled from "styled-components";

function Footer() {

  return (
      <Container>
          <p>Copyright 2021. HH. All rights reserved.</p>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  background: #eee;
  p {
    font-size: 15px;
    color: #777;
    text-align: center;
  }
`;


export default Footer;