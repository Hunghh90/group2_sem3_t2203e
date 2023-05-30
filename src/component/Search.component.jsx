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
                    width: "500px",
                    float: "left",
                    margin: '15px',
                    marginLeft: '350px',
                    alignItems: "center"
                }} />
        </div>
    )
}
export default SearchComponent;
