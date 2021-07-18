import React from 'react';
import styled from "styled-components";
import {media} from "../../../styled/Responsive.Styled";

function List({data, render}) {

  return (
      <Container className={'list'}>
          <Row>
              {
                  data.map((item,i) => <Col key={i}>{render(item, i)}</Col>).reverse()
              }
          </Row>
      </Container>
  )
}
const Container = styled.div`

`;

const Row = styled.div`
  display:flex;    
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  
  ${media.lessThan("md")`
    justify-content: center;
  `};
  
`;

const Col = styled.div`
  padding: 15px;
`;

export default List;