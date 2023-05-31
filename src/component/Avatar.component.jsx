import { Avatar } from 'antd';

const AvatarComponent = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            margin: "15px 0"
        }}>
            <Avatar size={64} icon="Test" style={{
                backgroundColor: "white",
                color: "green"
            }} />
        </div>
    )
}
export default AvatarComponent;
