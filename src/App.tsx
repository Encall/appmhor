import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import { Navbar } from './components/navbar'
import SignUpPage from './pages/signup'
import { Home } from './pages/home'
import { MyHealth } from './pages/myHealth'
import Map from './pages/map'
// import { NavbarTop } from './components/navbartop'
import { Profile } from './pages/profile'
import React, { useCallback, useEffect, useState } from 'react'
import { AuthContext, ContextValue, ContextType } from './contexts/context'
import { AxiosLib } from './lib/Axios'

const App: React.FC = () => {
  const [authContext, setAuthContext] = useState<ContextType>(ContextValue)

  const handleLogin = useCallback(async () => {
    try {
      const result = await AxiosLib.get('/api/users/me')

      if (result.status === 200) {
        setAuthContext({ id: result.data.id, IsLogin: true })
      }
    } catch (error) {
      setAuthContext({ id: '', IsLogin: false })
      console.log(error)
    }
  }, [])

  useEffect(() => {
    handleLogin().then(() => console.log('success'))
  }, [handleLogin])

  const theme = createTheme({
    typography: {
      fontFamily: ['Prompt'].join(','),
    },
  })

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
<!--             <NavbarTop /> -->
            <Navbar />
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
    </AuthContext.Provider>
  )
}

export default App
