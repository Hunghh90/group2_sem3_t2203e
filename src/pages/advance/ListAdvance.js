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
      title: 'Tên nhân viên',
      dataIndex: 'Name',
      key: 'Name',      
    },
    {
      title: 'Ngày tạm ứng',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
      title: 'Số tiền (VNĐ)',
      dataIndex: 'Amount',
      key: 'Amount',
    },
    {
        title: 'Lí do',
        dataIndex: 'description',
        key: 'description',
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
const ListAdvance = () => {
    return (
        <>
          <div className='list-finance'>
            Danh sách các khoản tạm ứng
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
export default ListAdvance;