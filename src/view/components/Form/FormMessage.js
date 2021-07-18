import React from 'react';
import styled from "styled-components";

export const emailRegex = /\S+@\S+\.\S+/;


function FormMessage({err}) {

    if (!err) return null;

  return (
      <Container>
          {
              err.type === 'required' &&
              '필수 입력 사항 입니다.'
          }
          {
              err.type === 'isEmail' &&
              '이메일 형식이 아닙니다'
          }
      </Container>
  )
}
const Container = styled.div`
  color: red;
  font-size: 13px;
`;


export default FormMessage;