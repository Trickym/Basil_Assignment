import { Avatar, Badge, Input, Space, theme } from "antd";
import { Header } from "antd/es/layout/layout"
import React from "react"
import { NotificationOutlined, SearchOutlined } from '@ant-design/icons';
const MainHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div
      style={{
        margin: '0px 15px 15px 15px',
        background: '#fff',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
        padding: '8px 15px',
        lineHeight: '20px'
      }}
      className="drop-shadow">
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="">
          <div className="px-3" >
            <h4 className="m-0">All Orders</h4>
            <div className="text-primary">All Orders</div>
          </div>

        </div>
        <div style={{ display: 'flex', gap: '25px', }}>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <Input size="large" prefix={<SearchOutlined />} placeholder="Search" />
            <Badge dot>
              <NotificationOutlined color="#BFBFBF" style={{ fontSize: 20, }} />
            </Badge>
          </div>
          <Avatar size={36} src="https://s3-alpha-sig.figma.com/img/3c4c/8625/e3056ba0cba2f30637245e06d047e59f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dXA-i7KpWejoVVPGnX2FOHBk-hx0o-X3Kni02E5zFF3kOvMBR3LnASsYOcUTBwHcIOqH~sd-CQjRVgSkTQS0HiJskVPoV1p6TdcchoJXgGMqh9ycEUmJ1cAZs2IqgakNpd0syhVyJ0XQ7rG9cLNzETpbINNFekcoSXTkTee96CsDyEYZACQJTROt45iZOz05A6EsHwbokjI3BbNCOgYW6iZi7Oc0DbAQ1a2hW91usm0kSPzx7n8q-SnS4paD6g43D3I15b6lDRr~qn4jC45i7FXbziYEb32VN4WQBIPaB3p0fURO5sP~fDlI-ze9qa-9gz0A1red59jMVCHHP95eXw__" />
        </div>
      </div>
    </div>
  )
}

export default MainHeader