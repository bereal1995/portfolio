import React from 'react';
import styled from "styled-components";
import Tags from "../Tags";
import {Color, setBoxShadow} from "../../../styled/Util.Styled";

function Card({title, desc, poster, tags, url}) {

  return (
      <Container>
          <Thumb href={url} target={'_blank'} rel="noreferrer">
              <Poster style={{backgroundImage: `url(${poster})`}}/>
          </Thumb>
          <Desc>
              <h3><a href={url} target={'_blank'} rel="noreferrer">{title}</a></h3>
              <p>{desc}</p>
              <Tags tags={tags}/>
          </Desc>
      </Container>
  )
}
const Container = styled.div`
  width: 330px;
  box-shadow: ${setBoxShadow(1)};
  transition: 0.4s;
  &:hover {
    box-shadow: ${setBoxShadow(2)};
  }
`;

const Thumb = styled.a`
  display:block;
  position: relative;
  height: 200px;
  overflow: hidden;
  cursor: pointer;
`;

const Poster = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #aaa 50% / cover no-repeat;
    transition: 3s;
    &:hover {
      transform: scale(1.1);
    }
`;

const Desc = styled.div`
    padding: 18px 15px 15px;
    h3 {
      margin-bottom: 10px;
      a {
          display:block;
          font-size: 22px;
          color: #333;
          font-weight: 500;
          text-transform:capitalize;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            color: ${Color.primary};
          }
      }
    }
    p {
      height: 66px;
      font-size: 15px;
      color: #777;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
`;

export default Card;