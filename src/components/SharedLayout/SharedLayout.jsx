import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>

          <StyledLink to="movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
