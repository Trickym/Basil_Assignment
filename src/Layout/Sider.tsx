import React, { } from 'react';
import {
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    UsergroupAddOutlined

} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    route?: string,
    onClick?: () => void,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        route,
        onClick,
        children,
        label,
        type,
    } as MenuItem;
}


const SideBar: React.FC = () => {
    const navigate = useNavigate()
    const items: MenuItem[] = [
        getItem('Option 1', '1', <HomeOutlined />, "/", () => {
            navigate("/")
        }),
        getItem('Option 2', '2', <i className="fa-regular fa-map" />, "/", () => {
            navigate("/")
        }),
        getItem('All Orders', '3', <i className="fa-solid fa-cart-arrow-down" />, 'orders', () => {
            navigate("/orders")
        }),

        getItem('Option 4', 'sub1', <UsergroupAddOutlined />, "/", () => {
            navigate("/")
        }),

        getItem('Option 5', 'sub2', <i className="fa-solid fa-list-ul" />, "/", () => {
            navigate("/")
        }),
    ];
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Sider className='position-relative drop-shadow' collapsed={true} style={{ borderTopRightRadius: '12px', borderBottomRightRadius: '12px', background: colorBgContainer }}
        >
            <div style={{ textAlign: 'center', margin: '20px 0px' }}>
                <Avatar size={40} src={`https://s3-alpha-sig.figma.com/img/b21c/8759/5394a13e5ebff15cc92349cfc30ad6ea?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gSthAwWVWdo3tnKxUsrTA6fp8p4E7oOOhWM82RYhCstGS1C3jTV3b1~Le-3bU0~Otz1zIQsUm8oxa-K35~co5-ZH7H8oMZeUPtasoPCsb8jWaW8i52oWuqpo31cCmfIBQz7r8cM7CMAwci5a4uELOKlfArJ51bCG0DTGED7kmrXnV-QlGSho7EgwXCq6wvDfHrQazfuLSlFONmGkGQ76E4JAiGYPJcMcrsVrqU39w8p4RwPj70Oe0plimBFB~i8BfDhDJ0iAbquyHxCnqFw9C4xArTUn2vGO1XvPUqW6hTP8hm8Qm8ni3UyQFMTxKQuvMOo5bSduvsBW1CbU7KTwTw__`} />
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
                style={{ background: colorBgContainer }}
            />
            <div className="position-absolute d-flex flex-column" style={{ bottom: 35, width: '100%', textAlign: 'center', gap: '25px' }}>
                <div className="">
                    <SettingOutlined />
                </div>
                <div className="">
                    <LogoutOutlined />
                </div>
            </div>
        </Sider>
    );
};

export default SideBar;