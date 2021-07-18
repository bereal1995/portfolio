import React from 'react';
import styled from "styled-components";

function Tags({tags}) {

  return (
      <Container>
          {
              tags.map((item, i) => <Tag key={i}>{item}</Tag>)
          }
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-items: flex-end;
  height: 54px;
  overflow: hidden;
`;

const Tag = styled.div`
    display:flex;
    align-items: center;
    height: 22px;
    padding: 0 9px;
    font-size: 13px;
    background: #e7e7e7;
    border-radius: 11px;
    color: #777;
    margin-right: 8px;
    margin-top: 5px;
    white-space: nowrap;
    &:last-child {
      margin-right: 0;
    }
`;


export default Tags;