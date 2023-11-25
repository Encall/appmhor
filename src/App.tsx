import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
