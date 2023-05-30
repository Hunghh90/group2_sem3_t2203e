import {
    Button,
    Modal,
} from 'antd'
import { LoginOutlined } from '@ant-design/icons';
import LoginComponent from './Login.component';
import { useState } from 'react';
const LoginButtonComponent = () => {
    const [size] = useState('large');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <Button
                type="primary" shape="round"
                size={size}
                style={{ float: 'right', margin: '10px 20px', color: 'red' }}
                onClick={showModal}
            >
                <LoginOutlined /> Login
            </Button>
            <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <LoginComponent />
            </Modal>
        </div>
    )
}
export default LoginButtonComponent;