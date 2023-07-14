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
const CreatePayRoll = () => {
    return (
        <div>
            <Form className='form-input'
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 24,
                }}
                layout="horizontal"

                
            >
        <Form.Item label="Tiêu đề">
          <Input />
        </Form.Item>
        <Form.Item label="Nhân viên">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> 
        <Form.Item label="Số ngày công">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Số ngày phép">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Số ngày nghỉ không lương">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Số ngày làm việc thực tế">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Số lương tạm ứng trước">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Giảm trừ">
          <InputNumber />
        </Form.Item>
        
        <Form.Item label="Thưởng">
          <InputNumber />
        </Form.Item>
      <Button type='primary' style={{ marginLeft: "250px" }}>Lưu thay đổi</Button>
    </Form>
        </div>
    );
};
export default CreatePayRoll;