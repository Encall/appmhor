import { useState, useEffect } from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  ToggleButton,
  ToggleButtonGroup,
  CircularProgress,
  Alert,
} from '@mui/material'
import { LockOutlined, CheckCircleOutline } from '@mui/icons-material'
import { MuiOtpInput } from 'mui-one-time-password-input'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from 'react-router-dom'
import KeyboardIcon from '@mui/icons-material/Keyboard'
import WebcamCapture from '../components/webcam'
import { AxiosLib } from '../lib/Axios'

export default function SignUp() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState('')
  const [step, setStep] = useState(1)
  const [inputMethod, setInputMethod] = useState('ocr') // ["ocr", "manual"
  const [resendOTP, setResendOTP] = useState(false) // [true, false
  const [isSent, setIsSent] = useState(false) // [true, false
  const [checked, setChecked] = useState(false) // [true, false
  const [showAlert, setShowAlert] = useState(false) // [true, false
  const [data, setData] = useState<{
    email: string
    thai_id: string
    phone: string
    firstname: string
    lastname: string
    gender: string
    birthday: Date
    address: string
    subdistrist: string
    district: string
    province: string
    postcode: string
  }>({
    email: '',
    thai_id: '',
    phone: '',
    firstname: '',
    lastname: '',
    gender: '',
    birthday: new Date(),
    address: '',
    subdistrist: '',
    district: '',
    province: '',
    postcode: '',
  })

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const handleSubmitCreateUser = async () => {
    try {
      const result = await AxiosLib.post('/api/users', {
        email: data.email,
        thai_id: data.thai_id,
        phone: data.phone,
        firstname: data.firstname,
        lastname: data.lastname,
        gender: data.gender,
        birthday: data.birthday,
        address: data.address,
        subdistrist: data.subdistrist,
        district: data.district,
        province: data.province,
        postcode: data.postcode,
      })

      console.log(result)
      if (result.status === 201) {
        return navigate('/home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        // setShouldNavigate(true)
      }, 2000)

      // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
      return () => clearTimeout(timer)
    }
  }, [step]) // This effect runs whenever `step` changes

  const nextStep = () => {
    if (!checked && step === 3) {
      setShowAlert(true)
    } else {
      setShowAlert(false)

      setStep((prevStep) => prevStep + 1)
    }
  }

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, inputMethod: string | null) => {
    if (inputMethod !== null) {
      setInputMethod(inputMethod)
    }
  }

  const handleResendOTP = () => {
    // Show loading state
    setResendOTP(true)

    // Simulate OTP resend delay
    setTimeout(() => {
      // Hide loading state and show sent state
      setResendOTP(false)
      setIsSent(true)

      // Reset to default state after another 3 seconds
      setTimeout(() => {
        setIsSent(false)
      }, 3000)
    }, 3000)
  }

  //   if (shouldNavigate) {
  //     return <Navigate to="/home" />
  //   }

  const handleChange = (newValue: string) => {
    setOtp(newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {showAlert && <Alert severity="warning">โปรดยอมรับข้อตกลงการใช้งานและนโยบายความเป็นส่วนตัว</Alert>}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            {step === 1
              ? 'ลงทะเบียน'
              : step === 2
                ? 'OTP'
                : step === 3
                  ? 'Personal Info'
                  : step === 4
                    ? inputMethod === 'ocr'
                      ? 'OCR Page'
                      : 'ข้อมูลส่วนตัว'
                    : 'ลงทะเบียนเสร็จสมบูรณ์'}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            {step === 1 && (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" component="div">
                      กรุณากรอกหมายเลขโทรศัพท์เพื่อรับ OTP
                    </Typography>
                    <TextField
                      autoComplete="phone-number"
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                        setData({ ...data, phone: e.target.value })
                      }}
                      name="phonenumber"
                      required
                      fullWidth
                      id="phonenumber"
                      label="เบอร์โทรศัพท์"
                      autoFocus
                    />
                  </Grid>
                </Grid>
            )}
            {step === 2 && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MuiOtpInput value={otp} onChange={handleChange} autoFocus length={6} />
                </Grid>
                <Grid item xs={12} sm={6} display="flex" direction="row" justifyContent="center" alignItems="center">
                  <Button
                    type="button"
                    variant="outlined"
                    color={isSent ? 'success' : 'primary'}
                    disabled={resendOTP}
                    onClick={handleResendOTP}
                  >
                    {resendOTP ? (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircularProgress size={24} />
                        <Box sx={{ ml: 1 }}>Resending OTP...</Box>
                      </Box>
                    ) : isSent ? (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CheckCircleOutline />
                        <Box sx={{ ml: 1 }}>OTP Sent!</Box>
                      </Box>
                    ) : (
                      'Resend OTP'
                    )}
                  </Button>
                </Grid>
              </Grid>
            )}
            {step === 3 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ToggleButtonGroup color="primary" value={inputMethod} exclusive onChange={handleAlignment} fullWidth>
                    <ToggleButton
                      value="ocr"
                      aria-label="ocr"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      Select OCR
                      <img src="thai_id_card.png" width={100} />
                    </ToggleButton>
                    <ToggleButton
                      value="manual"
                      aria-label="manual"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      Manual Input
                      <KeyboardIcon style={{ fontSize: '4em' }} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox required value="optinprivacy" color="primary" onChange={handleCheckBox} />}
                    checked={checked}
                    label="รับทราบ และยินยอมตามข้อตกลงการใช้งานและนโยบายความเป็นส่วนตัว"
                  />
                </Grid>
              </Grid>
            )}
            {step === 4 && inputMethod === 'manual' && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, firstname: e.target.value })
                    }}
                    autoComplete="firstname"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="ชื่อ"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, lastname: e.target.value })
                    }}
                    autoComplete="lastname"
                    name="lastname"
                    required
                    fullWidth
                    id="lastname"
                    label="นามสกุล"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, email: e.target.value })
                    }}
                    autoComplete="email"
                    name="email"
                    fullWidth
                    id="email"
                    label="อีเมล"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, thai_id: e.target.value })
                    }}
                    autoComplete=""
                    name="thai_id"
                    required
                    fullWidth
                    id="thai_id"
                    label="รหัสบัตรประชาชน"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    onChange={(newValue: any) => setData({ ...data, birthday: newValue })}
                    disableFuture
                    label="วันเดือนปีเกิด *"
                    className="w-full"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, address: e.target.value })
                    }}
                    autoComplete=""
                    name="address"
                    required
                    fullWidth
                    id="address"
                    label="ที่อยู่"
                    multiline
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, subdistrist: e.target.value })
                    }}
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="แขวง/ตำบล"
                  />
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, district: e.target.value })
                    }}
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="เขต/อำเภอ"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, province: e.target.value })
                    }}
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="จังหวัด"
                  />
                  <TextField
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                      setData({ ...data, postcode: e.target.value })
                    }}
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="รหัสไปษณีย์"
                  />
                </Grid>
              </Grid>
            )}
            {step === 4 && inputMethod === 'ocr' && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <div>
                    <WebcamCapture />
                  </div>
                </Grid>
              </Grid>
            )}

            {step === 5 && (
              <div className="flex items-center justify-center">
                <CircularProgress size={100} />
              </div>
            )}
            {step !== 5 && (
              <>
                {step === 4 ? (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmitCreateUser}
                  >
                    ลงทะเบียน
                  </Button>
                ) : (
                  <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={nextStep}>
                    ต่อไป
                  </Button>
                )}
                {step >= 3 && (
                  <Button type="button" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={prevStep}>
                    ย้อนกลับ
                  </Button>
                )}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  )
}
