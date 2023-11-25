import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import { Navbar } from './components/navbar'
import SignUpPage from './pages/signup'
import { Home } from './pages/home'
import { MyHealth } from './pages/myHealth'
import Map from './pages/map'
import { Profile } from './pages/profile'
import React, { useCallback, useEffect, useState } from 'react'
import { AuthContext, ContextValue } from './contexts/context'
import { AxiosLib } from './lib/Axios'
import { Protect } from './lib/protect'

const App: React.FC = () => {
  const [authContext, setAuthContext] = useState(ContextValue)

  const handleLogin = useCallback(async () => {
    try {
      const result = await AxiosLib.get('/api/users/me')

      if (result.status === 200) {
        setAuthContext({ ...result.data.data, IsLogin: true })
      }
    } catch (error) {
      setAuthContext({ ...authContext, IsLogin: false })
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
    palette: {
      primary: {
        main: '#6AA6FF',
        contrastText: '#fff',
      },
    },
  })

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/myHealth" element={<MyHealth />} />
              <Route path="/profile" element={<Protect children={<Profile />} />} />
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
