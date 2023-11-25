import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
