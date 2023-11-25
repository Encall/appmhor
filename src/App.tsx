import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import { Navbar } from './components/navbar'
import SignUpPage from './pages/signup'
import { Home } from './pages/home'
import { MyHealth } from './pages/myHealth'
import { Profile } from './pages/profile'
import Map from './pages/map'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Prompt'].join(','),
    },
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {/* <NavbarTop /> */}
          <Navbar/>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/myHealth" element={<MyHealth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/map" element={<Map />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
