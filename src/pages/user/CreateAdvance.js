import { PlusOutlined } from '@ant-design/icons';
import {
    Button,    
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,    
    Upload,
} from 'antd';
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const CreateAdvance = () => {
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
        <Form.Item label="Ngày ứng lương">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Số tiền (VNĐ)">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Mô tả chi tiết">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Nhân viên">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>        
      <Button type='primary' style={{ marginLeft: "250px" }}>Lưu thay đổi</Button>


            </Form>
        </div>
    );
};
export default CreateAdvance;