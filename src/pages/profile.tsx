import { Typography, Avatar, TextField, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React, { useContext } from 'react'
import { AxiosLib } from '../lib/Axios'
import { AuthContext } from '../contexts/context'

export const Profile: React.FC = () => {
  const auth = useContext(AuthContext)
  const HandleUpdate = async () => {
    try {
      const result = await AxiosLib.patch('/api/users', {
        address: auth?.authContext.address,
        subdistrist: auth?.authContext.subdistrist,
        district: auth?.authContext.district,
        province: auth?.authContext.province,
        postcode: auth?.authContext.postcode,
      })

      if (result.status === 200) {
        console.log('success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Card sx={{ maxWidth: 360, margin: 'auto', boxShadow: 3, borderRadius: 2, marginBottom: 10 }}>
        <CardContent className="flex justify-center mt-10">
          <Avatar alt="Name Lastname" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
        </CardContent>
        <CardContent>
          <Typography variant="h5" component="div" className="justify-center flex">
            {auth?.authContext.firstname} {auth?.authContext.lastname}
          </Typography>
          <Typography variant="subtitle1" component="div" className="justify-center flex">
            อายุ ปี
          </Typography>
        </CardContent>
        <CardContent>
          <div className="my-3">
            <TextField variant="outlined" label="เพศ" fullWidth disabled value={auth?.authContext.gender} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="อีเมล" fullWidth value={auth?.authContext.email} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="เบอร์โทรศัพท์" fullWidth disabled value={auth?.authContext.phone} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="กรุ๊ปเลือด" fullWidth value="B" />
          </div>
          <div className="my-3">
            <TextField
              variant="outlined"
              label="วันเดือนปีเกิด"
              fullWidth
              disabled
              value={auth?.authContext.birthday}
            />
          </div>
          <div className="my-3">
            <TextField
              multiline
              variant="outlined"
              label="ที่อยู่"
              fullWidth
              value={
                auth?.authContext.address +
                ' ' +
                auth?.authContext.subdistrist +
                ' ' +
                auth?.authContext.district +
                ' ' +
                auth?.authContext.province +
                ' ' +
                auth?.authContext.postcode
              }
            />
          </div>
          <div className="my-10">
            <Button onClick={HandleUpdate} disabled variant="outlined" fullWidth>
              แก้ไขข้อมูล
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
