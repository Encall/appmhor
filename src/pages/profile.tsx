import { Typography, Avatar, TextField, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import React, { useEffect, useState } from 'react'
import { AxiosLib } from '../lib/Axios'
import { UserType } from '../types/user'
import { useNavigate } from 'react-router-dom'

export const Profile: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [user, setUser] = useState<UserType>({
    id: '',
    email: '',
    firstname: '',
    lastname: '',
    thai_id: '',
    phone: '',
    gender: '',
    birthday: new Date(),
    address: '',
    subdistrist: '',
    district: '',
    province: '',
    postcode: '',
    IsLogin: false,
  })

  const HandleUpdate = async () => {
    try {
      const result = await AxiosLib.patch('/api/users', {
        address: user.address,
        subdistrist: user.subdistrist,
        district: user.district,
        province: user.province,
        postcode: user.postcode,
      })

      if (result.status === 200) {
        console.log('success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getInfo = async () => {
    try {
      const result = await AxiosLib.get('/api/users/me')

      if (result.status === 200) {
        setUser({ ...result.data.data[0], IsLogin: true })
      }
    } catch (error) {
      navigate(0)
    }
  }

  useEffect(() => {
    getInfo().then(() => setLoading(false))
  }, [])

  if (loading) return <>loading</>

  return (
    <>
      <Card sx={{ maxWidth: 360, margin: 'auto', boxShadow: 3, borderRadius: 2, marginBottom: 10 }}>
        <CardContent className="flex justify-center mt-10">
          <Avatar alt="Name Lastname" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
        </CardContent>
        <CardContent>
          <Typography variant="h5" component="div" className="justify-center flex">
            {user.firstname} {user.lastname}
          </Typography>
          <Typography variant="subtitle1" component="div" className="justify-center flex">
            อายุ ปี
          </Typography>
        </CardContent>
        <CardContent>
          <div className="my-3">
            <TextField variant="outlined" label="เพศ" fullWidth disabled value={user.gender} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="อีเมล" fullWidth value={user.email} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="เบอร์โทรศัพท์" fullWidth disabled value={user.phone} />
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
              value={(user.birthday || new Date()).toString()}
            />
          </div>
          <div className="my-3">
            <TextField
              multiline
              variant="outlined"
              label="ที่อยู่"
              fullWidth
              value={
                user.address + ' ' + user.subdistrist + ' ' + user.district + ' ' + user.province + ' ' + user.postcode
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
