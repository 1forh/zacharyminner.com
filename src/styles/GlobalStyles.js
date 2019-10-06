import { createGlobalStyle } from '@nfront/global-styles';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
