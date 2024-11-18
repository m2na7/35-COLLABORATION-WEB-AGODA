import { Global } from "@emotion/react";
import GlobalStyle from "@styles/global";

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
      <h1>Hello Agoda</h1>
    </>
  );
}

export default App;
