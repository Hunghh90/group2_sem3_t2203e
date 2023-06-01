import AvatarComponent from "../../component/Avatar.component";

const ProFile = () => {
    return (
        <div className="profile"style={{
           
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
                <p className="label"><b>Ngày vào</b> : 5721</p>
                <p className="label"><b>Địa chỉ</b> : 5721</p>
                
            </div>
        </div>
    )
}
export default ProFile;