import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'

export const Navbar = () => {
  const [value, setValue] = useState(0)

  return (
    <Paper className="z-50 bg-[#FCFCFC]" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction component={Link} to="/" value="Seek" icon={<SearchIcon />} />
        <BottomNavigationAction component={Link} to="/todo" value="Todo" icon={<HealthAndSafetyIcon />} />
        <BottomNavigationAction component={Link} to="/myhealth" value="My Health" icon={<PersonIcon />} />
      </BottomNavigation>
    </Paper>
  )
}
