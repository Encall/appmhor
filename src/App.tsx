import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup";
import { Home } from "./pages/home";
import { MyHealth } from "./pages/myHealth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myHealth" element={<MyHealth />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
