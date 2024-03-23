import { Avatar, Button, Calendar, Card, Input, Modal, Table, TableColumnsType, Tag } from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import React, { useState } from 'react'
import generateMachines from './utils/generateMachines';
import Successfull from './assets/success.png'
import Pending from './assets/pending.png'
import Sent from './assets/sending.png'
import RefundInitiated from './assets/refund_initiated.png'
import RefundComplete from './assets/refund_completed.png'
import Failure from './assets/failure.png'
import dayjs from 'dayjs';
interface FilterModalProps {
  open: any;
  onClose: () => void;
}
interface MachineItem {
  id: any;
  name: string;
  address: string;
}
const statusList = [
  {
    name: 'Successfull',
    icon: Successfull
  },
  {
    name: 'Pending',
    icon: Pending
  },
  {
    name: 'Sent',
    icon: Sent
  },
  {
    name: 'Failure',
    icon: Failure
  },
  {
    name: 'Refund Initiated',
    icon: RefundInitiated
  },
  {
    name: 'Refund Completed',
    icon: RefundComplete
  },
]
const FilterModal: React.FC<FilterModalProps> = ({ open, onClose }) => {
  const [selectedStatus, setSelectedStatus] = useState('Successfull')
  const columns: TableColumnsType<MachineItem> = [
    {
      title: <span className="text-primary">MACHINE NAME</span>,
      key: 'name',
      dataIndex: 'name',
      render: (data) => (
        <div>
          <Avatar className="mx-2 " src='https://s3-alpha-sig.figma.com/img/8bfd/5f26/4a75c6510c01ab94b3a55c060c8a71ad?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoG53nAZN5SbRx~3lLTE8U5qqiRkHoj50twvVJB~9uSi8~p-WfFu9hzN80AkPS4nRsBaEvS8SPUArycuh-8HpyGMHEzUpKA7G-uVAqwqlNJ0xKuMKAsUyJgMAZ9mIM3e4D2Ls1PniYFybl2MJfvJCCpVWFkFMV6rvbQFVPzrS0cmZdOTGjAVVYvILtq7v4D-xkfFVBbgyrdbZUllPqLR3iPF3kXUO9Ju5SblTnGFqCFqRcxpFZnGugwlZKnOIWu1W0qM72Qr~zPIWNzCyDdt5f8lq9A8EhsZFXihB45PhHsdJWfss2Iu-n-8XSWnaFKCTN3TZCp7NbI2kC53TN62cQ__' />
          {data}
        </div>
      ),
      sorter: true
    },
    {
      title: <span className="text-primary">ADDRESS</span>,
      key: 'address',
      dataIndex: 'address',
      sorter: true

    }
  ]
  return (
    <Modal width={800} open={open} onCancel={onClose} title={<h6 className='text-center'>Filter</h6>}
      footer={<div className='d-flex justify-content-between'>
        <div className="px-2 text-grey"><u>Clear All</u></div>
        <Button type='primary'>Select Filters</Button>
      </div>}
    >
      <div className="py-2" style={{ maxHeight: '500px', overflowY: 'scroll' }}>
        <Input className='w-100' size='large' placeholder='Search' />
        <Card style={{ borderColor: '#CED4DA' }} className='mt-3'>
          <div className="d-flex justify-content-between">
            <div className="">Machines</div>
            <div className="px-2 text-grey"><u>Clear All</u></div>
          </div>
          <div className="d-flex gap-2 flex-wrap mt-2">
            <Tag className=" custom-tag" closable>Aahaar Stall 23</Tag>
            <Tag className=" custom-tag" closable>Aahaar Stall 23</Tag>
            <Tag className=" custom-tag" closable>Aahaar Stall 23</Tag>
          </div>
          <div className="mt-4">
            <Input prefix={<SearchOutlined />} className='w-100' size='middle' placeholder='Search' />
          </div>
          <div className="mt-2">
            <Table columns={columns} rowKey={(data: MachineItem) => data.id} rowSelection={{}} pagination={{ pageSize: 5 }} dataSource={generateMachines(20)} />
          </div>
        </Card>
        <div className="mt-3">
          <div className="">Status</div>
          <div className="mt-2">
            <div className="d-flex flex-wrap gap-3">
              {
                statusList?.map(({ name, icon }) => (
                  <div onClick={() => {
                    setSelectedStatus(name)
                  }} className={(selectedStatus == name) ? "status-tag-selected" : "status-tag"} key={name}>
                    <div className="">
                      <img src={icon} alt={name} height={30} />
                    </div>
                    <div className="mt-2">
                      {name}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="mt-3">
          Date Range
          <Card style={{ borderColor: '#CED4DA' }} className='mt-3'>
            <div className="row">
              <div className="col-md-6">
                <Calendar headerRender={
                  ({ value }) => (
                    <div className='mb-3'>
                      <div>From :</div>
                      <Input allowClear className='w-100 my-2' value={dayjs(value).format('MMMM DD, YYYY')} />
                    </div>
                  )
                } fullscreen={false} />
              </div>
              <div className="col-md-6">
                <Calendar headerRender={
                  ({ value }) => (
                    <div className='mb-3'>
                      <div>To :</div>
                      <Input allowClear className='w-100 my-2' value={dayjs(value).format('MMMM DD, YYYY')} />
                    </div>
                  )
                } fullscreen={false} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Modal>
  )
}

export default FilterModal