import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/navbar'
import SignUpPage from "./pages/signup";
import { Home } from "./pages/home";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Prompt"].join(","),
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App
