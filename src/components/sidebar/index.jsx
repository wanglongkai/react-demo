import React, { useState } from 'react';
import { resolveMenuPath } from 'utils'
import {useNavigate} from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return { key, icon, children, label, type, };
}
const items = [
  getItem('应用实例', 'instance', <MailOutlined />, [
    getItem('授权接入', 'auth'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];
const SideBar = () => {
  const [current, setCurrent] = useState();
  const navigate = useNavigate();
  const onClick = (e) => {
    const path = resolveMenuPath(e.keyPath);
    navigate(path);
    setCurrent(e.key);
  };
  return (
    <Menu
    onClick={onClick}
    theme='dark'
    style={{ width: 256, height: '100vh', 'overflowY': 'auto' }}
    defaultOpenKeys={['instance']}
    selectedKeys={[current]}
    mode="inline"
    items={items}
    />
  );
};
export default SideBar;