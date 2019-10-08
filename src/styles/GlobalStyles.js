import { createGlobalStyle } from '@nfront/global-styles';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  pre,
  code {
    font-size: 16px !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default GlobalStyles;
