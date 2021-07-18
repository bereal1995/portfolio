import React from 'react';
import styled from "styled-components";
import Visual from "../../Home/Visual";
import About from "../../Home/About";
import Works from "../../Home/Works";
import Contact from "../../Home/Contact";
import Images from "../../../../images/Images";

const works = [
    {
        title: '골목시그널 Demo',
        desc: '골목시그널이란 사이트를 데모버전으로 클론 코딩했습니다.',
        poster: Images.alleySignal,
        tags: ['react', 'redux', 'responsive', 'html', 'styled-components'],
        url: 'https://gallant-murdock-edf570.netlify.app/',
    },
    {
        title: 'Youtube Demo',
        desc: '유튜브 클론 페이지 입니다.',
        poster: 'https://images.unsplash.com/photo-1521302200778-33500795e128?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
        tags: ['react', 'redux', 'redux-saga', 'html', 'styled-components'],
        url: 'https://nervous-snyder-2e3575.netlify.app/',
    },
    {
        title: 'Unsplash',
        desc: 'unsplash 클론 페이지 입니다.',
        poster: 'https://images.unsplash.com/photo-1521159311222-fcd72db9bd8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        tags: ['react', 'redux', 'redux-saga', 'html', 'styled-components'],
        url: 'https://festive-mestorf-df1d46.netlify.app/',
    },
    {
        title: 'git-hub',
        desc: '저의 깃허브 페이지 입니다.',
        poster: 'https://images.unsplash.com/photo-1591453089343-9ee5e4ac7e2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        tags: ['git', 'git-hub'],
        url: 'https://github.com/bereal1995',
    },
    {
        title: 'Blog',
        desc: '저의 블로그 페이지 입니다.',
        poster: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
        tags: ['blog'],
        url: 'https://bereal1995.github.io/',
    },
    {
        title: 'Lologem',
        desc: '기업 홈페이지 입니다.',
        poster: Images.lologem,
        tags: ['react', 'redux', 'rxJS', 'immutable', 'next-js', 'styled-components'],
        url: 'https://lologem.com/',
    },
    {
        title: 'Parrot',
        desc: '안경 구독 서비스 쇼핑몰 입니다.',
        poster: Images.parrot,
        tags: ['react', 'redux', 'rxJS', 'immutable', 'next-js', 'material-ui'],
        url: 'https://k-parrot.com/',
    },
    {
        title: 'AnnaDecor',
        desc: '화분 쇼핑몰 입니다.',
        poster: Images.anna,
        tags: ['react', 'redux', 'rxJS', 'immutable', 'next-js', 'material-ui'],
        url: 'https://annadecoration.com/',
    },
]

const about = [
    {
        title: '재미',
        desc: '저는 개발이 재밌습니다. 가장 좋아하는것이 무엇이냐고 물으면 자신있게 개발이라고 말할 수 있습니다. 이 마음가짐을 꾸준히 가지고 항상 즐기며 개발을 하고 싶습니다.',
        icon: 'https://images.unsplash.com/photo-1531501410720-c8d437636169?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
    {
        title: '공부',
        desc: '개발을 하다 보면 항상 새로운 기술이 나오고 여러가지 문제를 만나곤 합니다. 그렇기 때문에 항상 새로운 기술에 관심을 가지고 자기 개발을 위해 꾸준히 노력중 입니다.',
        icon: 'https://images.unsplash.com/photo-1560785477-d43d2b34e0df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
    {
        title: '소통',
        desc: '소통은 선택이 아니라 필수라고 생각합니다. 팀의 성공적인 프로젝트진행을 위해 꾸준한 의사소통을 통해 장벽을 무너트리는것이 중요하다고 생각하기 때문에 소통하기 위해 노력하겠습니다.',
        icon: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
]

function HomeContainer() {

  return (
      <Container className={'homeContainer'}>
          <Visual image={'https://images.unsplash.com/photo-1515248137880-45e105b710e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2871&q=80'}/>
          <About data={about}/>
          <Works data={works}/>
          <Contact/>
      </Container>
  )
}
const Container = styled.div`

`;


export default HomeContainer;