import React, { useState } from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

const SearchField = ({ onSearch, onClear }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleClear = () => {
    setSearchText('');
    onClear();
  };

  return (
    <Space>
      <Input
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
        Search
      </Button>
      <Button icon={<CloseCircleOutlined />} onClick={handleClear}>
        Clear
      </Button>
    </Space>
  );
};

export default SearchField;
