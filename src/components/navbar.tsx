import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import InfoIcon from '@mui/icons-material/Info'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const Navbar = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction component={Link} to="/" label="Seek" value="Seek" icon={<LocalHospitalIcon />} />
        <BottomNavigationAction component={Link} to="/todo" label="Todo" value="Todo" icon={<CheckCircleIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/myhealth"
          label="My Health"
          value="My Health"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Paper>
  )
}
