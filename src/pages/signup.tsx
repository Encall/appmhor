import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { MuiOtpInput } from "mui-one-time-password-input";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import Alert from "@mui/material/Alert";

import React, { useState } from "react";
import WebcamCapture from "../components/webcam";

export default function SignUp() {
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [inputMethod, setInputMethod] = useState("ocr"); // ["ocr", "manual"
  const [resendOTP, setResendOTP] = useState(false); // [true, false
  const [isSent, setIsSent] = useState(false); // [true, false
  const [shouldNavigate, setShouldNavigate] = useState(false); // [true, false
  const [checked, setChecked] = useState(false); // [true, false
  const [showAlert, setShowAlert] = useState(false); // [true, false
  const [formValid, setFormValid] = useState(false); // [true, false

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        setShouldNavigate(true);
      }, 2000);

      // Cleanup function to clear the timeout if the component unmounts before the timeout finishes
      return () => clearTimeout(timer);
    }
  }, [step]); // This effect runs whenever `step` changes

  const nextStep = () => {
    if (!checked && step === 3) {
      setShowAlert(true);
      
    } else {
      setShowAlert(false);

      setStep((prevStep) => prevStep + 1);
    }
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    inputMethod: string | null
  ) => {
    if (inputMethod !== null) {
      setInputMethod(inputMethod);
    }
  };

  const handleResendOTP = () => {
    // Show loading state
    setResendOTP(true);

    // Simulate OTP resend delay
    setTimeout(() => {
      // Hide loading state and show sent state
      setResendOTP(false);
      setIsSent(true);

      // Reset to default state after another 3 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 3000);
  };

  if (shouldNavigate) {
    return <Navigate to="/home" />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {showAlert && (
        <Alert severity="warning">
          Please check the checkbox before proceeding.
        </Alert>
      )}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {step === 1
              ? "Sign up"
              : step === 2
              ? "OTP"
              : step === 3
              ? "Personal Info"
              : step === 4
              ? inputMethod === "ocr"
                ? "OCR Page"
                : "ข้อมูลส่วนตัว"
              : "ลงทะเบียนเสร็จสมบูรณ์"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {step === 1 && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="phone-number"
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
                  <MuiOtpInput
                    value={otp}
                    onChange={handleChange}
                    autoFocus
                    length={6}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display="flex"
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    type="button"
                    variant="outlined"
                    color={isSent ? "success" : "primary"}
                    disabled={resendOTP}
                    onClick={handleResendOTP}
                  >
                    {resendOTP ? (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CircularProgress size={24} />
                        <Box sx={{ ml: 1 }}>Resending OTP...</Box>
                      </Box>
                    ) : isSent ? (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CheckCircleOutlineIcon />
                        <Box sx={{ ml: 1 }}>OTP Sent!</Box>
                      </Box>
                    ) : (
                      "Resend OTP"
                    )}
                  </Button>
                </Grid>
              </Grid>
            )}
            {step === 3 && (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <ToggleButtonGroup
                    color="primary"
                    value={inputMethod}
                    exclusive
                    onChange={handleAlignment}
                    fullWidth
                  >
                    <ToggleButton
                      value="ocr"
                      aria-label="ocr"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      Select OCR
                      <img src="thai_id_card.png" width={100} />
                    </ToggleButton>
                    <ToggleButton
                      value="manual"
                      aria-label="manual"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      Manual Input
                      <KeyboardIcon style={{ fontSize: "4em" }} />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        value="optinprivacy"
                        color="primary"
                        onChange={handleCheckBox}
                      />
                    }
                    checked={checked}
                    label="รับทราบ และยินยอมตามข้อตกลงการใช้งานและนโยบายความเป็นส่วนตัว"
                  />
                </Grid>
              </Grid>
            )}
            {step === 4 && inputMethod === "manual" && (
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
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
                    autoComplete="email"
                    name="email"
                    fullWidth
                    id="email"
                    label="อีเมล"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete=""
                    name="thaiid"
                    required
                    fullWidth
                    id="thaiid"
                    label="รหัสบัตรประชาชน"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    disableFuture
                    label="วันเดือนปีเกิด *"
                    className="w-full"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
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
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="แขวง/ตำบล"
                  />
                  <TextField
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="เขต/อำเภอ"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="จังหวัด"
                  />
                  <TextField
                    autoComplete=""
                    name="address"
                    required
                    id="address"
                    label="รหัสไปษณีย์"
                  />
                </Grid>
              </Grid>
            )}
            {step === 4 && inputMethod === "ocr" && (
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
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={nextStep}
                >
                  ต่อไป
                </Button>
                {step >= 3 && (
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={prevStep}
                  >
                    ย้อนกลับ
                  </Button>
                )}
              </>
            )}
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
