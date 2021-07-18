import React from 'react';
import styled from "styled-components";
import NavItem from "./NavItem";
import {media} from "../../../styled/Responsive.Styled";
import {setBoxShadow} from "../../../styled/Util.Styled";

function Nav({menus}) {


  return (
      <Container>
          {
              menus.map((menu, i) => <NavItem key={i} {...menu}/>)
          }
      </Container>
  )
}
const Container = styled.nav`
  display:flex;
  transition: 0.4s;
  
   ${media.lessThan("md")`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        flex-direction: column;
        justify-content: center;
        z-index: 100;
        width: 300px;
        background: #fff;
        box-shadow: ${setBoxShadow(1)};
        transform: translateX(-150%);
        .openSideMenu & {
            transform:none;
        }
   `};
`;


export default Nav;