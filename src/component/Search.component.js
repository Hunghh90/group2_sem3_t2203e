import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = () => {
    return (
        <div style={{
            width: "20vw",
            float: "right",
            margin: '15px',
        }}>
            <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                enterButton
                 />
        </div>
    )
}
export default SearchComponent;
