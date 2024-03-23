import { Avatar, Button, Space, Table, Tag } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
const data = [
    {
        id: '101',
        name: 'Mix Berry Smoothie',
        custom: 'Low Honey',
        status: 'SUCCESS',
        amount: 199
    },
    {
        id: '102',
        name: 'Mix Berry Smoothie',
        custom: 'Low Honey',
        status: 'SUCCESS',
        amount: 199
    },
    {
        id: '103',
        name: 'Mix Berry Smoothie',
        custom: 'Low Honey',
        status: 'SUCCESS',
        amount: 199
    },
    {
        id: '104',
        name: 'Mix Berry Smoothie',
        custom: 'Low Honey',
        status: 'SUCCESS',
        amount: 199
    }
]
const OrderDetails: React.FC = () => {
    const { id } = useParams()
    const columns = [{
        key: 'id',
        dataIndex: 'id',
        title: <span className="text-primary">ID</span>,
    }, {
        key: 'name',
        dataIndex: 'name',
        title: <span className="text-primary">DRINK NAME</span>,
        render: (data: any) => (
            <div>
                <Avatar className="mx-2 " src='https://s3-alpha-sig.figma.com/img/3b8e/2e4d/8d11b5dc63127aecd44bc2eccff76d70?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EuqCOH7anqxDRE8i9rKYEFdl0sX7lJhTFqi~5biVrxc2bQY-aiHpdlbP3M8teV4Gf~zURjcdSYj61d2lYq5f~ARpAcJO5pfS7~vzsCLgz~dYH92sGzRDQLJOjdbPycd5cQ~J7rxB0OKK2BJ6pRpXFSxC3A7WL-ixQBtbdZKnGtvTncQFPGULUmthkZQBk69Op6xAqhcP2hpQLvj498AbKuaMB1Cz0e5Nzqmk2Qr82Hgzo7Tv5pWo14ogFlw2LC00Csp08H73o~Gl2uimO5IKnEYAYAtiYXnIl2DakTDzWw-t2lBQKrIT25XFkyc~sPxLptXkzpmfl46JCL8FHbzh6w__' />
                {data}
            </div>
        ),
    },
    {
        key: 'custom',
        dataIndex: 'custom',
        title: <span className="text-primary">CUSTOMISATION</span>,
    },
    {
        key: 'amount',
        dataIndex: 'amount',
        title: <span className="text-primary">AMOUNT</span>,
    },
    {
        key: 'status',
        dataIndex: 'status',
        title: <span className="text-primary">DRINK STATUS</span>,
        render: (data: any) => (<Tag className="p-1 px-3 primary-radius-1" color={'success'}>{data}</Tag>)
    }
    ]
    return (
        <div className="w-100">
            <div className="d-flex justify-content-end align-items-center">
                <Space>
                    <Button
                        size="middle"
                        type='primary'
                        icon={
                            <i
                                className="fa-solid fa-file-export"
                                style={{ fontSize: "18px" }}
                            />
                        }
                    >Refund Complete Order</Button>
                    <Button
                        size="middle"
                        icon={
                            <i
                                className="fa-solid fa-file-export"
                                style={{ fontSize: "18px" }}
                            />
                        }
                    />
                    <Button
                        size="middle"
                        icon={
                            <i
                                className="fa-regular fa-file-lines "
                                style={{ fontSize: "18px" }}
                            />
                        }
                    />
                </Space>
            </div>
            <div className="row mt-2">
                <div className="col-md-4 p-2">
                    <div className=" drop-shadow bg-white px-3 py-3  w-100 primary-radius">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="text-primary m-0">{id}</h5>
                            <Tag className="p-1 px-3 primary-radius-1" color={'success'}>SUCCESS</Tag>
                        </div>
                        <div className="mt-5">
                            <h6 className="text-grey">
                                BASIC INFORMATION
                            </h6>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Date and Time
                                    </div>
                                    <div className="text-14">21 / 03 / 2023 ; 13:58:21 PM</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Machine
                                    </div>
                                    <div className="text-14">Aahaar Stall 3 (WH101)</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6 className="text-grey">
                                ORDER SUMMARY
                            </h6>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Payment ID
                                    </div>
                                    <div className="text-14">TX1042480129481</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Total Amount
                                    </div>
                                    <div className="text-14">796</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6 className="text-grey">
                                CUSTOMER INFORMATION
                            </h6>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Name
                                    </div>
                                    <div className="text-14">Simranjeet Kaur</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Contact Number
                                    </div>
                                    <div className="text-14">999999999</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Email
                                    </div>
                                    <div className="text-14">simranjeet.kaur@basil.health</div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h6 className="text-grey">
                                REFUND INFORMATION
                            </h6>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <div className="text-grey">
                                        Refund Transaction ID
                                    </div>
                                    <div className="text-14">TX1042480129481</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 p-2">
                    <div className=" drop-shadow bg-white px-3 py-3  w-100 primary-radius">
                        <div className="text-grey">
                            ORDER DETAILS
                        </div>
                        <div className="mt-3">
                            <Table dataSource={data} columns={columns} pagination={{ pageSize: 3 }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails