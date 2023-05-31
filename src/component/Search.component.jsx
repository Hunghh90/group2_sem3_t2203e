import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = () => {
    return (
        <div>
            <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                enterButton
                style={{
                    width: "300px",
                    float: "right",
                    margin: '15px',
                }} />
        </div>
    )
}
export default SearchComponent;
