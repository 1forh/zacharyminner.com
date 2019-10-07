import React from 'react';
import { Anchor, Box, Grid, Grommet, Heading } from 'grommet';
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
          <Box
            gridArea="nav"
            background="brand"
            pad="medium"
            direction="column"
          >
            <Heading margin="none" level="2">
              <Anchor
                href="/"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
              >
                <Box as="span" style={{ fontWeight: 100 }}>
                  Zach
                </Box>
                <Box as="span">Minner</Box>
              </Anchor>
            </Heading>
            <Box as="nav" pad={{ vertical: 'xlarge' }} style={{ flexGrow: 1 }}>
              <Anchor href="/" margin={{ bottom: 'xsmall' }}>
                Blog
              </Anchor>
              <Anchor href="/experience" margin={{ bottom: 'xsmall' }}>
                Experience
              </Anchor>
            </Box>
            <footer>
              © {new Date().getFullYear()}. Built with{' '}
              <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>.
            </footer>
          </Box>
          <Box
            gridArea="main"
            background="light-1"
            pad="large"
            style={{ overflow: 'scroll' }}
          >
            {children}
          </Box>
        </Grid>
      </Grommet>
    );
  }
}

export default Layout;
