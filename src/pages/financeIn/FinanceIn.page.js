import {
  Space,
  Table,
  Tag,
  Button,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const columns = [
  {
    title: 'Tiêu đề',
    dataIndex: 'Name',
    key: 'Name',      
  },
  {
    title: 'Ngày',
    dataIndex: 'Date',
    key: 'Date',
  },
  {
    title: 'Loại thu nhập',
    dataIndex: 'TypefinanceinId',
    key: 'TypefinanceinId',
  },
  {
    title: 'Só tiền (VNĐ)',
    dataIndex: 'Amount',
    key: 'Amount',
  },
  {
    title: 'Ngày',
    key: 'tags',
    dataIndex: 'tags',     
  },
  {
    title: 'Người tạo',
    key: 'tags',
    dataIndex: 'tags',     
  },
  {
    title: 'Trạng thái',
    key: 'Status',
    dataIndex: 'Status',     
  },
  {
    title: 'Xem chi tiết',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Chi tiết</a>      
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    Name: 'Bán hàng tháng 02/2023',
    Date: '2023/03/03',
    TypefinanceoutId : 'Chi cần thiết',
    Amount : '4000',      
    tags: ['nice', 'developer'],
    Status: '1'
  },
];
const ListFinanceIn = () => {
  return (
    <>
      <div className='list-finance'>
        Danh sách các khoản thu nhập
      </div>
      <div>
        <Button type='primary' className='list-button'>
          <PlusOutlined />
          <NavLink to="/createfinancein">
            Thêm mới
          </NavLink>
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </>
  )
};
export default ListFinanceIn;