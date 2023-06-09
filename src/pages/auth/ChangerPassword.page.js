
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';





const ChangerPassword = (props) => {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        if(values.password !== values.confirmpassword) {
            alert("mat khau xac minh chua dung");
            console.log("mat khau xac minh chua dung");
            return;
        } 
            console.log(values);
          form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        alert("Vui lòng điền đầy đủ thông tin");
        console.log(errorInfo);
    };
    return (
        <div>
            <Form
            form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Old Password"
                    name="oldpassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Old password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmpassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your confirm password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
export default ChangerPassword;