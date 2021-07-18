import React from 'react';
import styled from "styled-components";
import FormMessage from "./FormMessage";

function FormGroup(props) {

    const {
        label,
        type,
        name,
        defaultValue = '',
        value,
        register,
        id,
        placeholder,
        err,
    } = props;

  return (
      <Container>
          <Label>
              <Name>{label}</Name>
              {
                  type !== 'textarea' ?
                  <input type={type}
                         name={name}
                         defaultValue={defaultValue}
                         value={value}
                         ref={register}
                         id={id}
                         placeholder={placeholder}
                  /> :
                      <textarea name={name}
                                defaultValue={defaultValue}
                                value={value}
                                ref={register}
                                id={id}
                                placeholder={placeholder}
                      />
              }
              <FormMessage err={err}/>
          </Label>
      </Container>
  )
}
const Container = styled.div`

`;

const Label = styled.label`

`;

const Name = styled.span`
    
`;


export default FormGroup;