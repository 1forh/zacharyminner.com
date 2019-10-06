import React from 'react';
import { Anchor, Box, Grommet } from 'grommet';
import styled from 'styled-components';
import theme from '../utilities/grommet-theme';

const NavBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="primary"
    pad={{ horizontal: 'medium', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props}
  />
);

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Grommet theme={theme} full>
        <NavBar>
          <Anchor href="/" color="light-1" style={{ textDecoration: 'none' }}>
            <span style={{ fontWeight: 100 }}>Zach</span> Minner
          </Anchor>
        </NavBar>
        <main>
          <Container>{children}</Container>
        </main>
        <footer>
          <div>
            © {new Date().getFullYear()}. Built with{' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>.
          </div>
        </footer>
      </Grommet>
    );
  }
}

export default Layout;
