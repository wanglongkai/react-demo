import { Outlet } from 'react-router-dom'; 
import SideBar from 'components/sidebar';
import style from './index.module.scss';


export default function RootLayout(){
    return <div className={style.main_container}>
        <div className={style.sideBar_container}>
            <SideBar />
        </div>
        <div className={style.content_container}>
            <Outlet />
        </div>
    </div>
}
