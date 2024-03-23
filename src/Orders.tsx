import React, { useEffect, useState } from "react";
import { Button, Input, Space, Table, TableColumnsType, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import generateOrdersArray from "./utils/generateOrders";
import dayjs from "dayjs";
import FilterModal from "./FilterModal";
import { useNavigate } from "react-router-dom";
interface OrderItem {
    serialNo: number;
    date: string;
    orderId: string;
    machineName: string;
    customerName: string;
    contact: string;
    amount: any;
    status: string;
}

const Orders: React.FC = () => {
    const [orders, setOrders] = useState<OrderItem[]>([]);
    const [modalOpen, setModalOpen] = useState<Boolean>(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const handleRowClick = (record: any) => {
        navigate(`/orders/${record?.orderId}`)
    };
    const rowProps = (record: any) => {
        return {
            onClick: () => handleRowClick(record),
        };
    };

    useEffect(() => {
        fetchData()
    }, [])
    function fetchData() {
        setLoading(true)
        generateOrdersArray().then((data) => {
            console.log({ data })
            setOrders(data)
        })
            .catch((err) => {
                console.error({ err })
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const columns: TableColumnsType<OrderItem> = [
        {
            title: <span className="text-primary">S.NO.</span>,
            key: 'serialNo',
            dataIndex: 'serialNo'

        },
        {
            title: <span className="text-primary">DATE</span>,
            key: 'date',
            dataIndex: 'date',
            defaultSortOrder: 'descend',
            sorter: (a: OrderItem, b: OrderItem) => dayjs(a.date).diff(dayjs(b.date)),
        },
        {
            title: <span className="text-primary">ORDER ID</span>,
            key: 'orderId',
            dataIndex: 'orderId',
            sorter: true
        },
        {
            title: <span className="text-primary">MACHINE NAME</span>,
            key: 'machineName',
            dataIndex: 'machineName'
        },
        {
            title: <span className="text-primary">CUSTOMER NAME</span>,
            key: 'customerName',
            dataIndex: 'customerName'
        },
        {
            title: <span className="text-primary">CONTACT</span>,
            key: 'contact',
            dataIndex: 'contact'
        },
        {
            title: <span className="text-primary">AMOUNT</span>,
            key: 'amount',
            dataIndex: 'amount',
            sorter: (a: OrderItem, b: OrderItem) => (a.amount - b.amount),

        },
        {
            title: <span className="text-primary">STATUS</span>,
            key: 'status',
            dataIndex: 'status',
            render: (data) => (
                <Tag className="p-1 px-3 primary-radius-1" color={data == 'SUCCESS' ? 'success' : 'error'}>{data}</Tag>
            )
        },
    ]
    return (
        <div className="w-100">
            <div className="d-flex justify-content-between align-items-center">
                <div className="">
                    <Input
                        size="large"
                        prefix={<SearchOutlined />}
                        placeholder="Search"
                    />
                </div>
                <Space>
                    <Button
                        size="large"
                        icon={
                            <i
                                className="fa-solid fa-file-export"
                                style={{ fontSize: "18px" }}
                            />
                        }
                    />
                    <Button
                        size="large"
                        icon={
                            <i
                                className="fa-regular fa-file-lines "
                                style={{ fontSize: "18px" }}
                            />
                        }
                    />
                </Space>
            </div>
            <div className="row mt-3">
                <div className="col-md-8 p-2">
                    <div className="text-14 drop-shadow bg-white p-2 py-3 d-flex justify-content-around w-100 primary-radius">
                        <div >Machines: 6</div>
                        <div >Orders: 28</div>
                        <div >Customers: 28</div>
                        <div >Drinks: 28</div>
                        <div >Total Amount: ₹25999</div>
                        <div >Refunds Initiated: 3</div>
                    </div>
                    <div className="mt-3">
                        <Table rowClassName={() => 'clickable-row'} onRow={rowProps} dataSource={orders} columns={columns} loading={loading} pagination={{ pageSize: 3 }} />
                    </div>
                </div>
                <div className="col-md-4 p-2">
                    <div className="text-14  drop-shadow bg-white px-3 py-3 w-100 primary-radius">
                        <div className="text-center text-grey">Filters</div>
                        <div className="d-flex mt-3 justify-content-between align-items-center">
                            <Button className="text-grey" onClick={() => {
                                setModalOpen(true);
                            }}>Select Filters</Button>
                            <div className="px-2 text-grey"><u>Clear All</u></div>
                        </div>
                        <div className="mt-2">
                            <div className="py-2 text-grey">
                                Date From : <Tag className="mx-2 custom-tag">21/03/2022</Tag>
                            </div>
                            <div className="py-2 text-grey">
                                Date To : <Tag className="mx-2 custom-tag">21/03/2022</Tag>
                            </div>
                            <div className="text-gray py-2">
                                Status : <Tag className="mx-2 custom-tag" closable>Success</Tag>
                                <Tag className="mx-2 custom-tag" closable>Failure</Tag>
                                <Tag className="mx-2 custom-tag" closable>Pending</Tag>
                                <Tag className="mx-2 custom-tag mt-2" closable>Refund</Tag>
                                <Tag className="mx-2 custom-tag mt-2" closable>Pending</Tag>
                            </div>
                            <div className="text-gray py-2">
                                Machines : <Tag className="mx-2 custom-tag" closable>Aahaar Stall 23</Tag>
                                <Tag className="mx-2 custom-tag" closable>Aahaar Stall 23</Tag>
                                <Tag className="mx-2 custom-tag" closable>Aahaar Stall 23</Tag>
                                <Tag className="mx-2 custom-tag mt-2" closable>Aahaar Stall 23</Tag>
                                <Tag className="mx-2 custom-tag mt-2" closable>Aahaar Stall 23</Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FilterModal open={modalOpen} onClose={() => {
                setModalOpen(false)
            }} />
        </div>
    );
};

export default Orders;
