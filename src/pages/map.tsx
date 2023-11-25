import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import UseGeoLocation from '../hooks/useGeoLocation'
import { useMemo, useRef, useCallback, useState } from 'react'
import { Card, CardContent, Typography, Button, CardActions, Box, TextField, CircularProgress } from '@mui/material'
import { LocationOn, CheckCircleOutline, CheckCircle } from '@mui/icons-material'

type MapOptions = google.maps.MapOptions

const Map = () => {
  const userLocation = UseGeoLocation()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY!,
  })

  const options = useMemo<MapOptions>(
    () => ({
      mapId: '65ffcf93cf012c75',
      streetViewControl: false,
      mapTypeControl: false,
      disableDefaultUI: true,
      gestureHandling: 'greedy',
    }),
    [],
  )
  const onLoad = useCallback((map: any) => (mapRef.current = map), [])

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 5000)
  }

  const mapRef = useRef<GoogleMap>()
  const map: any = mapRef.current
  const [page, setPage] = useState(1)
  const nextPage = () => {
    setPage(page + 1)
  }

  return isLoaded ? (
    <Box className="relative">
      <GoogleMap
        mapContainerStyle={{ height: '100vh', width: '100vw' }}
        center={userLocation.position}
        zoom={16}
        options={options}
        onLoad={onLoad}
      >
        <Box className="">
          <Marker
            position={userLocation.position}
            icon={{
              url: 'person_pin_black_24dp.svg',
              scaledSize: new window.google.maps.Size(50, 50), // specify the size
            }}
            key={Math.random()}
          />
          <Marker
            position={{
              lat: 13.681907408673043,
              lng: 100.47460869537237,
            }}
            icon={{
              url: 'bangpakok9.png',
              scaledSize: new window.google.maps.Size(100, 100), // specify the size
            }}
            key={Math.random()}
            onClick={() => {
              map.panTo(new window.google.maps.LatLng(13.681907408673043, 100.47460869537237))
              map.setZoom(18)
            }}
          />
        </Box>
      </GoogleMap>

      {page === 1 && (
        <Box className="flex justify-center">
          <Card variant="outlined" className="bg-white bg-opacity-80 absolute bottom-0 mb-20 shadow-md rounded-xl">
            <div className="block">
              <div
                onClick={() => {
                  map.panTo(new window.google.maps.LatLng(13.681907408673043, 100.47460869537237))
                  map.setZoom(18)
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    ผลการค้นหา
                  </Typography>
                  <Box className="flex items-center space-x-2">
                    <Typography variant="h5" component="div">
                      โรงพยาบาลบางปะกอก 9
                    </Typography>
                    <CheckCircleOutline className="text-green-500" />
                  </Box>
                  <Box className="flex">
                    <LocationOn />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      ห่างจากคุณ 400 ม.
                    </Typography>
                  </Box>
                  <Box className="flex overflow-auto space-x-2">
                    <img src="socialsecurity.png" className="w-8 h-8" />
                    <img src="aia.png" className="w-8 h-8" />
                    <img src="fwd.png" className="w-8 h-8" />
                    <img src="thailive.png" className="w-8 h-8" />
                  </Box>
                </CardContent>
              </div>
              <CardActions className="px-8">
                <Button
                  variant="contained"
                  disableElevation
                  fullWidth
                  onClick={nextPage}
                  className="bg-[#6AA6FF] rounded-lg"
                >
                  ระบุอาการ
                </Button>
              </CardActions>
            </div>
          </Card>
        </Box>
      )}
      {page === 2 && (
        <Box className="flex justify-center">
          <Card variant="outlined" className="bg-white bg-opacity-80 absolute bottom-0 mb-20 shadow-md rounded-xl">
            <div className="block">
              <div>
                <CardContent>
                  <Box className="flex items-center space-x-2">
                    <Typography variant="subtitle1" component="div">
                      โรงพยาบาลบางปะกอก 9
                    </Typography>
                    <CheckCircleOutline className="text-green-500" />
                  </Box>
                  <Box className="flex">
                    <LocationOn fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      ห่างจากคุณ 400 ม.
                    </Typography>
                  </Box>
                  <Box className="flex flex-col space-y-4 mt-4">
                    <TextField variant="outlined" label="ระบุอาการเบื้องต้น" defaultValue="อาการ" fullWidth multiline />
                    <TextField variant="outlined" label="ระยะเวลาที่พบอาการ" defaultValue="เวลา" fullWidth multiline />
                  </Box>
                </CardContent>
              </div>
              <CardActions className="px-8">
                <Button
                  variant="contained"
                  disableElevation
                  fullWidth
                  className="bg-[#6AA6FF] rounded-lg"
                  onClick={nextPage}
                >
                  ส่งข้อมูล
                </Button>
              </CardActions>
            </div>
          </Card>
        </Box>
      )}
      {page === 3 && (
        <Box className="flex justify-center">
          <Card variant="outlined" className="bg-white bg-opacity-80 absolute bottom-0 mb-20 shadow-md rounded-xl">
            <div className="block">
              <div>
                <CardContent>
                  <Box className="flex items-center space-x-2">
                    <Typography variant="subtitle1" component="div">
                      โรงพยาบาลบางปะกอก 9
                    </Typography>
                    <CheckCircleOutline className="text-green-500" />
                  </Box>
                  <Box className="flex">
                    <LocationOn fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      ห่างจากคุณ 400 ม.
                    </Typography>
                  </Box>
                  <Box className="flex flex-col space-y-4 mt-4">
                    <Typography variant="subtitle1" color="text.primary">
                      กรุณาชําระเงินมัดจําเพื่อรับการคัดกรองอาการ
                    </Typography>
                    <img src="qrcode.png" className="w-50 h-50" />
                  </Box>
                </CardContent>
              </div>
              <CardActions className="px-8">
                <Button
                  variant="contained"
                  disableElevation
                  fullWidth
                  className="bg-[#6AA6FF] rounded-lg"
                  onClick={() => {
                    nextPage()
                    handleButtonClick()
                  }}
                >
                  ยืนยันการนัดหมาย
                </Button>
              </CardActions>
            </div>
          </Card>
        </Box>
      )}
      {page === 4 && (
        <Box className="flex justify-center">
          <Card variant="outlined" className="bg-white bg-opacity-80 absolute bottom-0 mb-20 shadow-md rounded-xl">
            <div className="block">
              <div>
                <CardContent>
                  <Box className="flex items-center space-x-2">
                    <Typography variant="subtitle1" component="div">
                      โรงพยาบาลบางปะกอก 9
                    </Typography>
                    <CheckCircleOutline className="text-green-500" />
                  </Box>
                  <Box className="flex">
                    <LocationOn fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      ห่างจากคุณ 400 ม.
                    </Typography>
                  </Box>
                  <Box className="flex justify-center space-y-4 mt-4">
                    {loading ? (
                      <CircularProgress size="5rem" />
                    ) : success ? (
                        <CheckCircle className="text-green-500 text-[5rem]" />
                    ) : null}
                  </Box>
                </CardContent>
              </div>
              <CardActions className="px-8">
                <Button variant="contained" disableElevation fullWidth className="bg-[#6AA6FF] rounded-lg" disabled>
                  ยืนยันการนัดหมาย
                </Button>
              </CardActions>
            </div>
          </Card>
        </Box>
      )}
    </Box>
  ) : (
    <>
      <div>ERROR</div>
    </>
  )
}

export default Map
