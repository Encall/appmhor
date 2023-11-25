export interface NavbarTopType {
    title: string;
    path: string;
}

export const NavbarTopData: NavbarTopType[] = [{
    title: 'Home',
    path: '/'
}, {
    title: 'My Health',
    path: '/myhealth'
}, {
    title: 'Todo',
    path: '/todo'
}, {
    title: 'ข้อมูลส่วนตัว', 
    path: '/profile'
}
]