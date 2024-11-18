import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/global";
import { h1Style } from "@/App.style";
import theme from "@styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <h1 css={h1Style}>Hello Agoda</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
