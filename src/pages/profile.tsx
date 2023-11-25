import { Typography, Avatar, TextField, Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useEffect, useState } from 'react'
import { AxiosLib } from '../lib/Axios'

export const Profile = () => {
  const [user, setUser] = useState<{
    firstname: string
    lastname: string
    thai_id: string
    phone: string
    gender: string
    birthday: Date
    address: string
    subdistrist: string
    district: string
    province: string
    postcode: string
  }>({
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

  useEffect(() => {
    AxiosLib.get('/api/users/me').then((res) => {
      if (res.status === 200) {
        setUser(res.data.data)
      }
    })
  }, [])

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
            <TextField variant="outlined" label="เพศ" fullWidth disabled defaultValue={user.gender} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="อีเมล" fullWidth defaultValue={user.gender} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="เบอร์โทรศัพท์" fullWidth disabled defaultValue={user.phone} />
          </div>
          <div className="my-3">
            <TextField variant="outlined" label="กรุ๊ปเลือด" fullWidth defaultValue="B" />
          </div>
          <div className="my-3">
            <TextField
              variant="outlined"
              label="วันเดือนปีเกิด"
              fullWidth
              disabled
              defaultValue={user.birthday.toString()}
            />
          </div>
          <div className="my-3">
            <TextField
              multiline
              variant="outlined"
              label="ที่อยู่"
              fullWidth
              defaultValue={
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
