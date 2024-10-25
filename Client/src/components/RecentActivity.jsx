import React, { useState } from 'react';
import { Card, List, Avatar, Input, Space, Button } from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

const RecentActivityFeed = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredMessages, setFilteredMessages] = useState(null);

  const messages = [
    {
      avatar: 'https://via.placeholder.com/40',
      title: 'John Doe added a new patient',
      description: 'Patient ID: #12345',
      content: '3 mins ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      title: 'Jane Smith scheduled an appointment',
      description: 'Date: 2024-02-15, Time: 10:00 AM',
      content: '1 hour ago',
    },
    {
      avatar: 'https://via.placeholder.com/40',
      title: 'Dr. Johnson updated patient records',
      description: 'Patient ID: #67890',
      content: '2 hours ago',
    },
  ];

  const handleSearch = () => {
    const filtered = messages.filter(
      (message) =>
        message.title.toLowerCase().includes(searchText.toLowerCase()) ||
        message.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredMessages(filtered);
  };

  const handleClear = () => {
    setSearchText('');
    setFilteredMessages(null);
  };

  return (
    <Card title="Recent Messages" className="m-3" headStyle={{color:'#fff', backgroundColor:'#000'}}>
      <Space className="mb-3">
        <Input
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button type="primary" icon={<SearchOutlined />} onClick={handleSearch}>
          Search
        </Button>
        {/* <Button icon={<CloseCircleOutlined />} onClick={handleClear}>
          Clear
        </Button> */}
      </Space>
      <List
        itemLayout="horizontal"
       
        dataSource={filteredMessages || messages}
        renderItem={(item) => (
            <List.Item style={{ textDecoration: 'none' }}>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="/#" style={{ textDecoration: 'none' }}>{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default RecentActivityFeed;
