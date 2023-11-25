export interface NavbarTopType {
  title: string
  path: string
}

export const NavbarTopData: NavbarTopType[] = [
  {
    title: 'Home',
    path: '/'
}, {
    title: 'สุขภาพของฉัน',
    path: '/myhealth'
}, {
    title: 'Todo',
    path: '/todo',
  },
  {
    title: 'ข้อมูลส่วนตัว',
    path: '/profile',
  },
]
