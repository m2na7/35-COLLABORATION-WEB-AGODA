import { Global, ThemeProvider } from "@emotion/react";
import GlobalStyle from "@styles/global";
import theme from "@styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pageRoutes from "@/routes/pageRoutes";
import Carousel from "@components/Carousel/Carousel";

const App: React.FC = () => {
  const router = createBrowserRouter([...pageRoutes]);

  const thumbnail = "https://img.youtube.com/vi/YwC0m0XaD2E/0.jpg";

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Carousel thumbnail={thumbnail} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
