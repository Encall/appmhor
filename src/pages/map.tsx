import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import UseGeoLocation from '../hooks/useGeoLocation'
import { useMemo } from 'react'
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material'

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

  return isLoaded ? (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={{ height: '100vh', width: '100vw' }}
        center={userLocation.position}
        zoom={16}
        options={options}
      >
        <Marker position={userLocation.position} />
      </GoogleMap>
      <Card variant="outlined" className="absolute flex bottom-0 mb-20 left-0 m-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            TEST
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  ) : (
    <>
      <div>ERROR</div>
    </>
  )
}

export default Map
