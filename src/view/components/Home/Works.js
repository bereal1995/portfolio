import React from 'react';
import styled from "styled-components";
import {ContentContainer, SectionContainer} from "../Layout/Layout.Styled";
import SectionTitle from "../Title/SectionTitle";
import List from "../List";
import Card from "../Card";

function Works({data}) {

    const renderCard = (item) => <Card {...item}/>;

  return (
      <Container className={'works'}
                 name={'works'}>
          <ContentContainer>
            <SectionTitle title={'recent works'} desc={'저의 작업물들을 소개 합니다.'}/>
            <List data={data}
                  render={renderCard}
            />
          </ContentContainer>
      </Container>
  )
}
const Container = styled(SectionContainer)`
  border-top: 1px solid #e0e0e0;
`;


export default Works;