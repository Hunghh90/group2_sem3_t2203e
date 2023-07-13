import { Button, Modal } from "antd";
import AvatarComponent from "../../component/Avatar.component";
import { useState } from "react";
import ChangerPassword from "../auth/ChangerPassword.page";

const ProFile = (props) => {
    const [isModalChangerPassword, setIsModalChangerPassword] = useState(false)
    return (
        <div className="profile" style={{

        }}>
            <div>
                <AvatarComponent />
                <h1>Họ tên</h1>
            </div>
            <div className="profile-content">

                <p className="label"><b>Mã NV</b> : 5721</p>
                <p className="label"><b>Phòng ban</b> : 5721</p>
                <p className="label"><b>Chức vụ</b> : 5721</p>
                <p className="label"><b>Email</b> : 5721</p>
                <p className="label"><b>Tel</b> : 5721</p>
                <p className="label"><b>Ngày vào Cty</b> : 5721</p>
                <p className="label"><b>Địa chỉ</b> : 5721</p>

            </div>
            <Button className="profile-button"
                onClick={() => setIsModalChangerPassword(true)}
                type="primary">
                Đổi mật khẩu
            </Button>
            <div>
                <Modal className="modal"
                    title="Đổi mật khẩu"
                    open={isModalChangerPassword}
                    onOk={() => setIsModalChangerPassword(false)}
                    onCancel={() => setIsModalChangerPassword(false)}
                    footer={false}
                >
                    <ChangerPassword setIsModalChangerPassword={setIsModalChangerPassword} />
                </Modal>
            </div>
        </div>
    )
}
export default ProFile;