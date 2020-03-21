import React from "react";
import { createGlobalStyle, ThemeProvider } from "src/lib/StyledComponents";
import { theme } from "src/theme";

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  #__next{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  html{
    font-size: 62.5%;
    background-color: ${props => props.theme.background};
  }

  div{
    /* padding: 2rem; */
    &#__next{
      padding: 0;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 58%;
    }
  }

  @media (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }

  p {
    font-size: 1.4rem;
  }

`;
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Layout;
