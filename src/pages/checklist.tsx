import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { Typography, Box, Checkbox } from '@mui/material'

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    width: '80vw',
    margin: '1em',
    borderRadius: '1em',
  }),
)

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const Checklist = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className="flex flex-col justify-center items-center ">
        <Box className="">
            {/* <Box className="shadow-xl mt-10 w-[80vw] h-60 rounded-xl bg-cover bg-[url('bglabel1.png')]"> */}
        <Box className="shadow-xl mt-10 w-[80vw] h-52 rounded-xl" style={{background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)', }}>
            <Typography variant="h5" component="div" color='white' className='px-5 pt-12 '>
                Daily Check List
            </Typography>
        </Box>
        </Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="shadow-xl" aria-controls="panel1d-content" id="panel1d-header">
          <Checkbox />
          <Box className="flex flex-col">
            <Typography>ทานยาหลังอาหารเช้า</Typography>
            <Typography variant="body1" color="text.secondary">
              1 เม็ด
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="flex flex-col justify-center items-center">
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary className="shadow-xl" aria-controls="panel2d-content" id="panel2d-header">
          <Checkbox />
          <Box className="flex flex-col">
            <Typography>ทานยาหลังอาหารเย็น</Typography>
            <Typography variant="body1" color="text.secondary">
              1 เม็ด
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="flex flex-col justify-center items-center">
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary className="shadow-xl" aria-controls="panel3d-content" id="panel3d-header">
          <Checkbox />
          <Box className="flex flex-col">
            <Typography>ทายาก่อนนอน</Typography>
            <Typography variant="body1" color="text.secondary">
              1 เม็ด
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="flex flex-col justify-center items-center">
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
            <Typography>Paracetamol 1 เม็ด</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default Checklist
