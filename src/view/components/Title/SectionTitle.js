import React from 'react';
import styled from "styled-components";

function SectionTitle({title, desc}) {

  return (
      <Container>
          <h2>{title}</h2>
          {
              desc && <p>{desc}</p>
          }
      </Container>
  )
}
const Container = styled.div`
  margin-bottom: 40px;
  text-align: center;
  h2 {
    font-size: 30px;
    font-weight: 500;
    text-transform: capitalize;
    color: #333;
  }
  p {
    font-size: 18px;
    color: #777;
    font-weight: 400;
    line-height: 1.6;
    margin-top: 10px;
  }
`;


export default SectionTitle;