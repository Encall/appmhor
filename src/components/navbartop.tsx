import { Box, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { NavbarTopData } from '../contents/NavbarTop'

export const NavbarTop = () => {
  const location = useLocation()

  return (
    <div>
      <Box sx={{ marginY: '14px', justifyContent: 'center' }}>
        <Box sx={{ borderBottom: 1, marginX: '1em' }}>
          <h1>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              {NavbarTopData.find((element) => element.path == location.pathname)?.title}
            </Typography>
          </h1>
        </Box>
      </Box>
    </div>
  )
}
