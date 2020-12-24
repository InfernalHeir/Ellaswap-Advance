import { MuiThemeProvider } from "@material-ui/core/styles";
import {createGlobalStyle} from "styled-components";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
        <Component {...pageProps} />
    </MuiThemeProvider>
  );
}
