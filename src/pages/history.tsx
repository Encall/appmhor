import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import { StepButton, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material'

const steps = [
  {
    id: 1,
    label: 'วันที่ 19 ธันวาคม 2565',
    caption: 'โรงพยาบาล A',
    description: `โรงพยาบาล A: ผ่าตัดไส้ติ่งฉุกเฉิน`,
  },
  {
    id: 2,
    label: 'วันที่ 23 มกราคม 2566',
    caption: 'โรงพยาบาล B',
    description: 'โรงพยาบาล B: ตรวจพบโรคนิ่วในไต',
  },
  {
    id: 3,
    label: 'วันที่ 23 มกราคม 2566',
    caption: 'โรงพยาบาล B',
    description: 'โรงพยาบาล B: ไตวายเฉียบพลัน',
  },
  {
    id: 4,
    label: 'วันที่ 27 มกราคม 2566',
    caption: 'โรงพยาบาล B',
    description: 'โรงพยาบาล B: นัดติดตามผลตรวจไตวาย',
  },
  {
    id: 5,
    label: 'วันที่ 22 เมษายน 2566',
    caption: 'โรงพยาบาล C',
    description: 'โรงพยาบาล C: พนแพทย์ผิวหนัง',
  },
]

const History = () => {
  const [activeStep, setActiveStep] = React.useState(0)
  const [month, setMonth] = React.useState('')

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string)
  }

  return (
    <div style={{ background: '#8EC9FF', width: '100%', height: '50vh' }}>
      <Typography
        variant="h5"
        style={{ color: '#FFF', textAlign: 'center', paddingTop: '2.75rem', paddingBottom: '2.75rem' }}
      >
        ประวัติการรักษา
      </Typography>
      <Box sx={{ maxWidth: '100vw', borderRadius: '50px' }} className="bg-white border pt-12 px-10">
        <FormControl fullWidth style={{ paddingInline: '10px', marginBottom: '1rem' }}>
          <InputLabel id="demo-simple-select-label">ช่วงเวลา</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="ช่วงเวลา"
            onChange={handleChange}
          >
            <MenuItem value={10}>เมษายน 2566</MenuItem>
            <MenuItem value={20}>มกราคม 2566</MenuItem>
            <MenuItem value={30}>ธันวาคม 2565</MenuItem>
          </Select>
        </FormControl>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.id}>
              <StepButton onClick={handleStep(index)}>
                <Box className="flex flex-col">
                  {step.label}
                  <Typography variant="caption" color="text.secondary">
                    {step.caption}
                  </Typography>
                </Box>
                <StepContent>
                  <Typography>{step.description}</Typography>
                </StepContent>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  )
}

export default History
