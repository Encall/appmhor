import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import crowdIcon from '../img/crowd.png'
import recordIcon from '../img/icon-record.png'
import medicalBenefitIcon from '../img/icon-medicalBenefit.png'
import calendarIcon from '../img/icon-calendar.png'

export const MyHealth = () => {
    return (
        <div>
            <div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Box sx={{
                            borderRadius: '1em',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'baseline',
                            marginX: '1em',
                            height: '20vh',
                            width: '40vw',
                            backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.9), rgba(89, 176, 255, 0.9)), url(${crowdIcon})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'repeat',
                        }}>
                            <Link to="/profile">
                                <Typography variant='h6' sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }} >ข้อมูลส่วนบุคคล</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            borderRadius: '1em',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'baseline',
                            marginX: '1em',
                            height: '20vh',
                            width: '40vw',
                            backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.9), rgba(89, 176, 255, 0.9)), url(${medicalBenefitIcon})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',

                        }}>
                            <Link to="/asd">
                                <Typography variant='h6' sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }} >สิทธิการรักษาพยาบาล</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            borderRadius: '1em',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'baseline',
                            marginX: '1em',
                            height: '20vh',
                            width: '40vw',
                            backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.9), rgba(89, 176, 255, 0.9)), url(${recordIcon})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',

                        }}>
                            <Link to="/asd">
                                <Typography variant='h6' sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }} >ประวัติการรักษาพยาบาล</Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            borderRadius: '1em',
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'baseline',
                            marginX: '1em',
                            height: '20vh',
                            width: '40vw',
                            backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.9), rgba(89, 176, 255, 0.9)), url(${calendarIcon})`,
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',

                        }}>                            <Link to="/asd">
                                <Typography variant='h6' sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }} >การนัดหมาย</Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Box sx={{ display: 'absolute', margin: '1em' }}>
                    <Stack spacing={1}>
                        <Box sx={{ borderRadius: 2, border: 3, borderColor: '#61E5FF' }}>
                            <Stack direction="row" spacing={1}>
                                <Box sx={{ borderRadius: 1, borderLeft: 7, borderColor: '#61E5FF', paddingY: '0.1em', display: 'block', paddingX: '0.5em', justifyContent: 'center' }}>
                                    <Typography variant='h6' sx={{ fontWeight: 'bold' }}>12</Typography>
                                    <Typography variant='h6'>มิ.ย.</Typography>
                                </Box>
                                <Stack direction="column" spacing={0.25}>
                                    <Box sx={{ paddingX: '0.5em'}}>
                                        <Typography variant='h6' sx={{fontSize:'90%'}}>นัดพบ{" "}
                                            <Box component="span" fontWeight="fontWeightBold">
                                                น.พ. กิตติพงศ์ ตาปี
                                            </Box>

                                        </Typography>
                                    </Box>
                                    <Stack direction="column">
                                        <Box sx={{ paddingX: '0.5em' }}>
                                            <Typography variant='h6' sx={{fontSize:'90%'}}>15.00 - 16.00</Typography>
                                        </Box>
                                        <Box sx={{ paddingX: '0.5em' }}>
                                            <Typography variant='h6' sx={{ fontSize: '80%' }}>รพ. พระราม 2</Typography>
                                        </Box>

                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
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
