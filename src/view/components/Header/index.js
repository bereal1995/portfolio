import React from 'react'
import styled from 'styled-components';
import Nav from "./Nav";
import cn from 'classnames'
import {setBoxShadow} from "../../../styled/Util.Styled";
import {media} from "../../../styled/Responsive.Styled";
import {AiOutlineMenu} from "react-icons/ai";
import {appActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";

const menus = [
    {
        name: 'home',
        to: 'home',

    },
    {
        name: 'about',
        to: 'about',

    },
    {
        name: 'works',
        to: 'works',

    },
    {
        name: 'contact',
        to: 'contact',

    }
]

const Header = () => {

    const {sideMenu} = useSelector(state => state.app);

    const handleSideMenu = () => {
        appActions.updateState({
            sideMenu: !sideMenu
        })
    }

    return (
        <Container className={cn('Header', {openSideMenu: sideMenu})}>
            <Logo>HH</Logo>
            <Nav menus={menus}/>
            <ButtonMenu onClick={handleSideMenu}>
                <AiOutlineMenu/>
            </ButtonMenu>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 0 50px;
    box-shadow: ${setBoxShadow()};
    
    ${media.lessThan("md")`
       height: 60px; 
       padding: 0 10px;
    `};
    
`;

const Logo = styled.div`
    text-transform:capitalize;
    font-size: 22px;
    font-weight: 500;
    color: #333;
    ${media.lessThan("md")`
        font-size: 20px;
    `};
`;

const ButtonMenu = styled.div`
  display: none;
  font-size: 22px;
  padding: 10px;
  ${media.lessThan("md")`
      display:flex;
  `};
`;

export default Header;