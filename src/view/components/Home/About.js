import React from 'react';
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import List from "../List";
import IconCard from "../Card/IconCard";

function About({data}) {

    const renderAbout = (item) => <IconCard {...item}/>

  return (
      <Container className={'about'}
                 name={'about'}>
          <ContentContainer>
            <SectionTitle title={'about'} desc={'저에 대해 소개합니다.'}/>
            <List data={data}
                  render={renderAbout}
            />
          </ContentContainer>
      </Container>
  )
}
const Container = styled(SectionContainer)`
  .list {
    margin-top: 100px;
  }
`;



export default About;