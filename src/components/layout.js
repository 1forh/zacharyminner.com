import React from 'react';
import { Anchor, Box, Grid, Grommet } from 'grommet';
import theme from '../styles/GrommetTheme';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Grommet theme={theme} full>
        <Grid
          rows={['100vh']}
          columns={['1/4', 'auto']}
          areas={[
            { name: 'nav', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
          ]}
          style={{ position: 'fixed' }}
        >
          <Box gridArea="nav" background="brand">
            <Anchor href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontWeight: 100 }}>Zach</span> Minner
            </Anchor>
            <footer>
              <div>
                © {new Date().getFullYear()}. Built with{' '}
                <a href="https://www.gatsbyjs.org">Gatsby</a>.
              </div>
            </footer>
          </Box>
          <Box
            gridArea="main"
            background="light-1"
            pad="large"
            style={{ overflow: 'scroll' }}
          >
            <main>{children}</main>
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default Layout;
