import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 50px;
  border-bottom: solid 2px black;
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;

  margin-left: 40px;
  color: black;
  font-size: 25px;

  &.active {
    color: red;
  }
`;
