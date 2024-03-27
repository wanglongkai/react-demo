import { Outlet } from 'react-router-dom'; 
import SideBar from 'components/sidebar';
import style from './index.module.scss';


export default function RootLayout(){
    return <main className={style.main_container}>
        <SideBar />
        <div className={style.content_container}>
            <Outlet />
        </div>
    </main>
}
