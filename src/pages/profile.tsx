import { Typography, Avatar, TextField, Button} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

export const Profile = () => {
  return (
    <>
      <Card sx={{ maxWidth: 360, margin: 'auto', boxShadow: 3, borderRadius: 2,marginBottom:10}}>
        <CardContent className="flex justify-center mt-10">
          <Avatar alt="Name Lastname" src="/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
        </CardContent>
        <CardContent>
          <Typography variant="h5" component="div" className="justify-center flex">
            ชื่อ นามสกุล
          </Typography>
          <Typography variant="subtitle1" component="div" className="justify-center flex">
            อายุ 20 ปี
          </Typography>
        </CardContent>
        <CardContent>
          <div className='my-3'>
          <TextField variant="outlined" label="เพศ" fullWidth disabled defaultValue="ชาย" />
          </div>
          <div className='my-3'>
          <TextField variant="outlined" label="อีเมล" fullWidth defaultValue="test@gmail.com" />
          </div>
          <div className='my-3'>
          <TextField variant="outlined" label="เบอร์โทรศัพท์" fullWidth disabled defaultValue="0999999999" />
          </div>
          <div className='my-3'>
          <TextField variant="outlined" label="กรุ๊ปเลือด" fullWidth defaultValue="B" />
          </div>
          <div className='my-3'>
          <TextField variant="outlined" label="วันเดือนปีเกิด" fullWidth disabled defaultValue="04/04/2547" />
          </div>
          <div className='my-3'>
          <TextField multiline variant="outlined" label="ที่อยู่" fullWidth defaultValue="23 ทกาหฟกทสฟาหก กทฟาหกหฟา าทกาฟหกทาฟ กทฟาหกทา 10150" />
          </div>
          <div className='my-10'>
            <Button variant="outlined" fullWidth>แก้ไขข้อมูล</Button>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
