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
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Loại khoản chi',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Só tiền (VNĐ)',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Ngày',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  const ListFinanceIn = () => {
    return (
      <>
        <div className='list-finance'>
          Danh sách khoản chi
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