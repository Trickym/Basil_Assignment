import React, { ReactNode } from 'react'
import { Layout } from 'antd';
import Sider from './Sider';
import MainHeader from './MainHeader';
const { Content } = Layout
interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100%' }}>
            <Sider />
            <div style={{ width: '100%' }}>
                <MainHeader />
                <Content style={{ margin: '0px 15px 15px 15px', padding: '8px 15px', }}>
                    {children}
                </Content>
            </div>
        </div>
    )
}

export default MainLayout