import { Box, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import crowdIcon from '../img/crowd.png'
import recordIcon from '../img/icon-record.png'
import medicalBenefitIcon from '../img/icon-medicalBenefit.png'
import calendarIcon from '../img/icon-calendar.png'

export const MyHealth = () => {
  return (
    <div className="w-full mt-20">
      <div className="">
        <div>
          <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Link
                style={{ textDecoration: 'none', display: 'flex', justifyItems: 'center', alignItems: 'center' }}
                to="/profile"
              >
                <Box
                  sx={{
                    borderRadius: '1em',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'baseline',
                    marginX: '1em',
                    height: '12em',
                    width: '12em',
                    backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.95), rgba(89, 176, 255, 0.95)), url(${crowdIcon})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em', textDecoration: 'none' }}
                  >
                    ข้อมูลส่วนบุคคล
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                style={{ textDecoration: 'none', display: 'flex', justifyItems: 'center', alignItems: 'center' }}
                to="/medicalright"
              >
                <Box
                  sx={{
                    borderRadius: '1em',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'baseline',
                    marginX: '1em',
                    height: '12em',
                    width: '12em',
                    backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.95), rgba(89, 176, 255, 0.9)), url(${medicalBenefitIcon})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }}>
                    สิทธิการรักษาพยาบาล
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                style={{ textDecoration: 'none', display: 'flex', justifyItems: 'center', alignItems: 'center' }}
                to="/asd"
              >
                <Box
                  sx={{
                    borderRadius: '1em',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'baseline',
                    marginX: '1em',
                    height: '12em',
                    width: '12em',
                    backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.95), rgba(89, 176, 255, 0.9)), url(${recordIcon})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }}>
                    ประวัติการรักษาพยาบาล
                  </Typography>
                </Box>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                style={{ textDecoration: 'none', display: 'flex', justifyItems: 'center', alignItems: 'center' }}
                to="/asd"
              >
                <Box
                  sx={{
                    borderRadius: '1em',
                    display: 'flex',
                    justifyContent: 'left',
                    alignItems: 'baseline',
                    marginX: '1em',
                    height: '12em',
                    width: '12em',
                    backgroundImage: `linear-gradient(rgba(89, 176, 255, 0.95), rgba(89, 176, 255, 0.9)), url(${calendarIcon})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <Typography variant="h6" sx={{ color: 'white', paddingLeft: '1em', paddingTop: '1em' }}>
                    บันทึกอาการ
                  </Typography>
                </Box>
              </Link>
            </Grid>
          </Grid>
        </div>

        <div className="px-4">
          <Box sx={{ marginY: '32px', display: 'flex', justifyContent: 'center' }}>
            <Typography
              sx={{
                textAlign: 'center',
                bgcolor: '#6AA6FF',
                border: 1,
                py: '10px',
                paddingX: '20px',
                borderRadius: '16px',
                color: '#FFF',
                fontSize: '1rem',
              }}
            >
              การนัดหมายของฉัน
            </Typography>
          </Box>
          <Box sx={{ display: 'absolute', margin: '1em' }}>
            <Stack spacing={1}>
              <Box sx={{ borderRadius: 2, border: 1, borderColor: '#313131', boxShadow: 1 }}>
                <Stack direction="row" spacing={1}>
                  <Box
                    sx={{
                      borderRadius: 1,
                      borderLeft: 7,
                      borderColor: '#61E5FF',
                      paddingY: '0.1em',
                      display: 'block',
                      paddingX: '0.5em',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      12
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                      มิ.ย.
                    </Typography>
                  </Box>
                  <Stack direction="column" spacing={0.25}>
                    <Box sx={{ paddingX: '0.5em' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                        นัดพบ{' '}
                        <Box component="span" fontWeight="fontWeightBold">
                          น.พ. กิตติพงศ์ ตาปี
                        </Box>
                      </Typography>
                    </Box>
                    <Stack direction="column">
                      <Box sx={{ paddingX: '0.5em' }}>
                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                          15.00 - 16.00
                        </Typography>
                      </Box>
                      <Box sx={{ paddingX: '0.5em' }}>
                        <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                          รพ. พระราม 2
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </div>
      </div>
    </div>
  )
}
