import { useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "@mui/material/Button";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  };

  const retake = () => {
    setImageSrc(null);
  };

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="webcam" />
      ) : (
        <Webcam height={300} width={300} ref={webcamRef} />
      )}
      <div className="">
        {imageSrc ? (
          <Button        
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            onClick={retake}
          >
            Retake photo
          </Button>
        ) : (
          <Button         
            type="button"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            onClick={capture}
          >
            Capture photo
          </Button>
        )}
      </div>
    </div>
  );
};

export default WebcamCapture;
