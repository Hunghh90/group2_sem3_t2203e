import { Input } from 'antd';

const { Search } = Input;

const SearchComponent = () => {
    return (
        <div className='search-input'>
            <Search
                placeholder="search"
                onSearch={value => console.log(value)}
                enterButton
                 />
        </div>
    )
}
export default SearchComponent;
