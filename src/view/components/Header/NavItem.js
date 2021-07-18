import React from 'react';
import styled from "styled-components";
import {Link, Events} from 'react-scroll';
import {Color} from "../../../styled/Util.Styled";
import {appActions} from "../../../redux/ActionCreators";
import {useSelector} from "react-redux";
import {breakPoint} from "../../../styled/Responsive.Styled";

function NavItem({name, to}) {

    Events.scrollEvent.register('begin', function(to, element) {
        appActions.updateState({
            sideMenu: false
        })
    });

    const size = useSelector(state => state.app.windowSize);
    console.log('@@size.width,breakPoint.MD',size.width,breakPoint.MD);

  return (
      <Container>
          <NavLink activeClass="isActive"
                   to={to}
                   spy={true}
                   smooth={true}
                   offset={size.width > breakPoint.MD ? -69 : -59}
                   duration={400}>
              {name}
          </NavLink>
      </Container>
  )
}
const Container = styled.div`
`;

const NavLink = styled(Link)`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  padding: 0 25px;
  font-weight: 500;
  text-transform: capitalize;
  color: #333;
  cursor: pointer;
  &:hover, &.isActive {
    color: ${Color.primary};
  }
`;


export default NavItem;