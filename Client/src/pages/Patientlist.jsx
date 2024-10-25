import React, { useState, useEffect } from 'react';
import { Divider, Button, Skeleton, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';

const columns = [
  {
    title: 'No',
    dataIndex: 'Patient_No',
    key: 'Patient_No',
    responsive: ['sm'],
  },
  {
    title: 'Surname',
    dataIndex: 'Surname',
    key: 'Surname',
    responsive: ['sm'],
  },
  {
    title: 'Other Names',
    dataIndex: 'other_names',
    key: 'other_names',
    responsive: ['sm'],
  },
  {
    title: 'ID Number',
    dataIndex: 'ID_Number',
    key: 'ID_Number',
    responsive: ['sm'],
  },
  {
    title: 'Tel',
    dataIndex: 'Tel',
    key: 'Tel',
    responsive: ['sm'],
  },
  {
    title: 'Gender',
    dataIndex: 'Gender',
    key: 'Gender',
    responsive: ['sm'],
  },
  {
    title: 'Date Registered',
    dataIndex: 'Date_Registered',
    key: 'Date_Registered',
    responsive: ['sm'],
  },
];

const dummyData = [
  {
    Patient_No: '001',
    Surname: 'Doe',
    other_names: 'John',
    ID_Number: '12345678',
    Tel: '0712345678',
    Gender: 'Male',
    Date_Registered: '2023-10-01',
  },
  {
    Patient_No: '002',
    Surname: 'Smith',
    other_names: 'Jane',
    ID_Number: '87654321',
    Tel: '0723456789',
    Gender: 'Female',
    Date_Registered: '2023-09-15',
  },
  {
    Patient_No: '003',
    Surname: 'Brown',
    other_names: 'Chris',
    ID_Number: '98765432',
    Tel: '0734567890',
    Gender: 'Male',
    Date_Registered: '2023-08-20',
  },
  {
    Patient_No: '004',
    Surname: 'Johnson',
    other_names: 'Alice',
    ID_Number: '65432198',
    Tel: '0745678901',
    Gender: 'Female',
    Date_Registered: '2023-07-10',
  },
];

const Patientlist = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate data fetching with a delay for loading effect
    setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
  };

  return (
    <div>
      <h5 className="card-title h4"  style={{ color: '#ac8342' }}><u>Patient List</u></h5>
      <Divider />
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <Search placeholder="Search patients" onSearch={handleSearch} enterButton={<SearchOutlined />} />
        <div className="d-flex text-center gap-3">
          <Button type="primary" href="/addPatient" style={{ color: '#fff' }}>Add Patient</Button>
          <Button href="#" type="primary" style={{ color: '#fff' }}>Create a Visit</Button>
        </div>
      </div>
      <div className="table-responsive-lg">
        {loading ? (
          <Skeleton active paragraph={{ rows: 10 }} />
        ) : (
          <Table
            columns={columns}
            dataSource={data}
            rowKey="Patient_No"
            style={{ color: '#fff' }}
            scroll={{ x: 'max-content' }}
            pagination={{ pageSize: 5 }}
          />
        )}
      </div>
    </div>
  );
};

export default Patientlist;
