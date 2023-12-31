import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material/styles'
import { Navbar } from './components/navbar'
import Register from './pages/register'
import { MyHealth } from './pages/myHealth'
import { MedicalRight } from './pages/medicalRight'
import Map from './pages/map'
import { Profile } from './pages/profile'
import React, { useCallback, useEffect, useState } from 'react'
import { AuthContext, ContextValue } from './contexts/context'
import { AxiosLib } from './lib/Axios'
import { Protect } from './lib/protect'
import Checklist from './pages/checklist'
import History from './pages/history'

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [authContext, setAuthContext] = useState(ContextValue)

  const handleLogin = useCallback(async () => {
    try {
      const result = await AxiosLib.get('/api/users/me')

      if (result.status === 200) {
        setAuthContext({ ...result.data.data[0], IsLogin: true })
      }
    } catch (error) {
      setAuthContext({ ...authContext, IsLogin: false })
      console.log(error)
    }
  }, [])

  useEffect(() => {
    handleLogin().then(() => setLoading(false))
  }, [handleLogin])

  if (loading) return <>Loading</>

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
              <Route path="/signup" element={<Register />} />
              <Route path="/medicalRight" element={<MedicalRight />} />
              <Route path="/myHealth" element={<MyHealth />} />
              <Route path="/profile" element={<Protect children={<Profile />} />} />
              <Route path="/map" element={<Map />} />
              <Route path="/todo" element={<Checklist />} />
              <Route path="/history" element={<History />} />
              <Route path="/" element={<Map />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>
    </AuthContext.Provider>
  )
}

export default App
