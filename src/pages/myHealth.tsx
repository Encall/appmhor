import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const MyHealth = () => {
  return (
    <div>
      <div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Box
              sx={{
                borderRadius: '1em',
                display: 'flex',
                bgcolor: '#33691e',
                justifyContent: 'left',
                alignItems: 'baseline',
                marginX: '1em',
                height: '20vh',
                width: '40vw',
              }}
            >
              <Link to="/profile">
                <Typography sx={{ color: 'white', fontSize: '1em', paddingLeft: '1em', paddingTop: '1em' }}>
                  Personal <br />
                  Information
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                borderRadius: '1em',
                display: 'flex',
                bgcolor: '#33691e',
                justifyContent: 'left',
                alignItems: 'baseline',
                marginX: '1em',
                height: '20vh',
                width: '40vw',
              }}
            >
              <Link to="/asd">
                <Typography sx={{ color: 'white', fontSize: '1em', paddingLeft: '1em', paddingTop: '1em' }}>
                  Medical <br />
                  Benefits
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                borderRadius: '1em',
                display: 'flex',
                bgcolor: '#33691e',
                justifyContent: 'left',
                alignItems: 'baseline',
                marginX: '1em',
                height: '20vh',
                width: '40vw',
              }}
            >
              <Link to="/asd">
                <Typography sx={{ color: 'white', fontSize: '1em', paddingLeft: '1em', paddingTop: '1em' }}>
                  Medical <br />
                  Benefits
                </Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                borderRadius: '1em',
                display: 'flex',
                bgcolor: '#33691e',
                justifyContent: 'left',
                alignItems: 'baseline',
                marginX: '1em',
                height: '20vh',
                width: '40vw',
              }}
            >
              <Link to="/asd">
                <Typography sx={{ color: 'white', fontSize: '1em', paddingLeft: '1em', paddingTop: '1em' }}>
                  Medical <br />
                  Benefits
                </Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div>
        <Box sx={{ display: 'absolute', margin: '1em' }}>
          <Stack spacing={1}>
            <Box sx={{ borderRadius: 2, border: 1, borderColor: '#61E5FF' }}>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    borderRadius: 1,
                    borderLeft: 4,
                    borderColor: '#61E5FF',
                    paddingY: '0.1em',
                    display: 'block',
                    paddingX: '0.2em',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold' }}>12</Typography>
                  <Typography>June</Typography>
                </Box>
                <Stack direction="column" spacing={0.25}>
                  <Box sx={{ paddingX: '0.5em' }}>
                    <Typography>
                      Visit{' '}
                      <Box component="span" fontWeight="fontWeightBold">
                        Dr. Kittipong Tapy
                      </Box>
                    </Typography>
                  </Box>
                  <Stack direction="column">
                    <Box sx={{ paddingX: '0.5em' }}>
                      <Typography>15.00 - 16.00</Typography>
                    </Box>
                    <Box sx={{ paddingX: '0.5em' }}>
                      <Typography sx={{ fontSize: '0.7em' }}>Phraram 2 Hospital</Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </div>
    </div>
  )
}
