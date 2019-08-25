import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchInput() {
  const onSearch = value => {
    console.log('search-input ', value);
  };

  return (
    <div>
      <Search
        className="search"
        enterButton
        placeholder="Type city name..."
        size="large"
        onSearch={onSearch}
      />
    </div>
  )
}

export default SearchInput;
