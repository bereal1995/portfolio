import React from 'react';
import styled from "styled-components";
import {setBoxShadow} from "../../../styled/Util.Styled";

function IconCard({icon,title,desc}) {

  return (
      <Container>
          <Icon>
              <IconImg style={{backgroundImage: `url(${icon})`}}/>
          </Icon>
          <Text>
              <h3>{title}</h3>
              <pre>{desc.replace(/\\n/g, "\n")}</pre>
          </Text>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  flex-direction: column;
  width: 330px;
  text-align: center;
`;

const Icon = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  margin: 0 auto; 
  border-radius: 100%;
  overflow: hidden; 
  box-shadow: ${setBoxShadow(1)};
`;

const IconImg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff 50% / cover no-repeat;
`;

const Text = styled.div`
  h3 {
    margin: 40px 0 20px;
    font-size: 26px;
    font-weight: 500;
    color: #333;
  }
  p, pre {
    font-size: 15px;
    line-height: 1.5;
    color: #777;
  }
  pre {
    white-space: pre-wrap;
  }
`;


export default IconCard;