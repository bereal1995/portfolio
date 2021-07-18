import React from 'react';
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import {useForm} from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import FormGroup from "../Form/FormGroup";
import {Button} from "../Button/Button.Styled";
import {emailRegex} from "../Form/FormMessage";
import {Color, setBoxShadow} from "../../../styled/Util.Styled";
import {media} from "../../../styled/Responsive.Styled";

function Contact() {

    const [serverState, sendToFormspree] = useFormspree("mdopprez");
    const {handleSubmit, register, errors} = useForm()
    
    console.log('@@serverState',serverState);

  return (
      <Container name={'contact'}>
          <ContentContainer>
            <SectionTitle title={'contact'}/>
            <FormContainer onSubmit={handleSubmit(sendToFormspree)}>
                <Row>
                    <FormGroup label={''}
                               type={'text'}
                               name={'name'}
                               defaultValue={''}
                               register={register({
                                   required: true,
                               })}
                               id={'name'}
                               placeholder={'Your Name'}
                               err={errors.name}
                    />
                    <FormGroup label={''}
                               type={'text'}
                               name={'email'}
                               defaultValue={''}
                               register={register({
                                   required: true,
                                   validate: {
                                       isEmail: (v) => emailRegex.test(v)
                                   }
                               })}
                               id={'email'}
                               placeholder={'Your Email'}
                               err={errors.email}
                    />
                </Row>
                <Row>
                    <FormGroup label={''}
                               type={'text'}
                               name={'subject'}
                               defaultValue={''}
                               register={register({
                                   required: true,
                               })}
                               id={'subject'}
                               placeholder={'Your Subject'}
                               err={errors.subject}
                    />
                </Row>
                <Row>
                    <FormGroup label={''}
                               type={'textarea'}
                               name={'message'}
                               defaultValue={''}
                               register={register({
                                   required: true,
                               })}
                               id={'message'}
                               placeholder={'Your Message'}
                               err={errors.message}
                    />
                </Row>
                <ButtonContainer>
                    {
                        serverState.succeeded ?
                        <Button className={'send-button success'} disabled>SUCCESS</Button> :
                        <Button className={'send-button'}>SEND</Button>
                    }
                </ButtonContainer>
            </FormContainer>
          </ContentContainer>
      </Container>
  )
}
const Container = styled(SectionContainer)`
  background: #f7f8f9;
`;

const FormContainer = styled.form`
  .send-button {
    width: 200px;
    margin: 0 auto;
    box-shadow: ${setBoxShadow(1)};
    &:hover{
        box-shadow: ${setBoxShadow(2)};
    }
    &:active {
        box-shadow: ${setBoxShadow(3)};
    }
  }
  .success {
    background: ${Color.primary};
    color: #fff;
  }
`;

const Row = styled.div`
  display:flex;
  justify-content: space-between;
  color: #495057;
  ${media.lessThan("md")`
    flex-direction: column;    
  `};
  > div {
    width: 100%;
    padding: 0 15px;
    margin-bottom: 20px;
    input {
      width: 100%;
      padding: 15px 20px;
      border: 1px solid #eee;
      transition: .3s;
      &:focus{
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      }
    }
    textarea {
      width: 100%;
      height: 150px;
      resize: none;
      padding: 15px 20px;
      border: 1px solid #eee;
      font-family: Arial;
      transition: .3s;
      &:focus{
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
      }
    }
  }
`;

const ButtonContainer = styled.div`
    
`;

export default Contact;