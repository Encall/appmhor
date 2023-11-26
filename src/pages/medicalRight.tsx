import { Box, Typography, Stack } from '@mui/material'
import ministryFinanceImage from '../img/ministry-finance.png' // adjust the path as necessary
import aia from '../img/aia.png'
import muangthai from '../img/muangthai.png'

export const MedicalRight = () => {
  return (
    <div style={{ background: '#8EC9FF', width: '100%', height: '50vh' }}>
      <Typography
        variant="h5"
        style={{ color: '#FFF', textAlign: 'center', paddingTop: '2.75rem', paddingBottom: '2.75rem' }}
      >
        ประวัติการรักษา
      </Typography>
      <Box sx={{ maxWidth: '100vw', borderRadius: '50px' }} className="bg-white border pt-12 px-10">
        <Stack
          spacing={3}
          sx={{ paddingX: '2em', paddingTop: '1em', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
        >
          <Stack
            direction="row"
            sx={{ borderRadius: '1em', bgcolor: '#bfd8ff', width: '80vw', height: '7em', alignItems: 'center' }}
          >
            <Box sx={{ marginX: '1em' }}>
              <img src={ministryFinanceImage} alt="Ministry Finance" />
            </Box>
            <Box>
              <Stack sx={{ justifyContent: 'center', paddingX: '1em' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '80%' }}>
                    สิทธิสวัสดิการข้าราชการ
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '65%' }}>
                    สิทธิการรักษา : รักษาในโรงพยาบาลรัฐ{' '}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{ borderRadius: '1em', bgcolor: '#bfd8ff', width: '80vw', height: '7em', alignItems: 'center' }}
          >
            <Box sx={{ marginX: '1em' }}>
              <img src={aia} alt="Ministry Finance" />
            </Box>
            <Box>
              <Stack sx={{ justifyContent: 'center', paddingX: '1em' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '80%' }}>
                    ประกันสุขภาพ AIA 30 ยังแจ๋ว
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '65%' }}>
                    สิทธิการรักษา : รักษาวงเงิน 8 ล้านบาท ในโรงพยาบาลที่ร่วมรายการ
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{ borderRadius: '1em', bgcolor: '#bfd8ff', width: '80vw', height: '7em', alignItems: 'center' }}
          >
            <Box sx={{ marginX: '1em' }}>
              <img src={muangthai} alt="Ministry Finance" />
            </Box>
            <Box>
              <Stack sx={{ justifyContent: 'center', paddingX: '1em' }}>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '80%' }}>
                    ประกันสุขภาพ ออมเงินเพื่อคนที่รัก
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: '65%' }}>
                    สิทธิการรักษา : นำเงินไปออมเป็นมรดกให้ลูกหลายและรักษาโรคร้ายแรง
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </div>
  )
}
