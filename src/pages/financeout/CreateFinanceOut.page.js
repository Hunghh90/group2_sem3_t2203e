import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    TreeSelect,
    Upload,
} from 'antd';
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const CreateFinanceOut = () => {
    return (
        <div>
            <Form className='form-input'
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                
            >
                <Form.Item label="Họ và tên">
                    <Input />
                </Form.Item>
                <Form.Item label="Tiêu đề">
                    <Input />
                </Form.Item>
                <Form.Item label="Loại khoản chi">
                    <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="TreeSelect">
                    <TreeSelect
                        treeData={[
                            {
                                title: 'Light',
                                value: 'light',
                                children: [
                                    {
                                        title: 'Bamboo',
                                        value: 'bamboo',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Cascader">
                    <Cascader
                        options={[
                            {
                                value: 'zhejiang',
                                label: 'Zhejiang',
                                children: [
                                    {
                                        value: 'hangzhou',
                                        label: 'Hangzhou',
                                    },
                                ],
                            },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Ngày - tháng">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Số tiền">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Mô tả chi tiết">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Tải lên hóa đơn" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Button type='primary' style={{ marginLeft: "250px" }}>Button</Button>

            </Form>
        </div>
    );
};
export default CreateFinanceOut;