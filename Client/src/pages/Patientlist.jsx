import React, { useState, useEffect } from 'react';
import { Divider, Button, Skeleton, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';

const columns = [
  {
    Header: 'No',
    accessor: 'Patient_No',
    responsive: ['sm'],
  },
  {
    Header: 'Surname',
    accessor: 'Surname',
    responsive: ['sm'],
  },
  {
    Header: 'Other Names',
    accessor: 'other_names',
    responsive: ['sm'],
  },
  {
    Header: 'ID Number',
    accessor: 'ID_Number',
    responsive: ['sm'],
  },
  {
    Header: 'Tel',
    accessor: 'Tel',
    responsive: ['sm'],
  },
  {
    Header: 'Gender',
    accessor: 'Gender',
    responsive: ['sm'],
  },
  {
    Header: 'Date Registered',
    accessor: 'Date_Registered',
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
  // Add more dummy data as needed
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

  const handleEdit = (row) => {
    console.log('Edit:', row);
  };

  const handleDelete = (row) => {
    console.log('Delete:', row);
  };

  const handleView = (row) => {
    console.log('View:', row);
  };

  const handleSearch = (searchText) => {
    console.log('Searching for:', searchText);
  };

  const handleClear = () => {
    console.log('Clearing search');
  };

  const handleSort = (column, sortOrder) => {
    console.log('Sorting:', column, sortOrder);
    const sortedData = [...data].sort((a, b) => {
      if (column.accessor === 'Surname') {
        return sortOrder === 'asc' ? a.Surname.localeCompare(b.Surname) : b.Surname.localeCompare(a.Surname);
      } else if (column.accessor === 'Date_Registered') {
        const dateA = new Date(a.Date_Registered);
        const dateB = new Date(b.Date_Registered);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      }
      return 0;
    });
    setData(sortedData);
  };

  const handleFilter = (column, value) => {
    console.log('Filtering:', column, value);
    const filteredData = dummyData.filter((row) => {
      if (column.accessor === 'Surname') {
        return row.Surname.toLowerCase().includes(value.toLowerCase());
      } else if (column.accessor === 'ID_Number') {
        return row.ID_Number.toLowerCase().includes(value.toLowerCase());
      }
      return true;
    });
    setData(filteredData);
  };

  return (
    <div>
      <h5 className="card-title h4"><u>Patient List</u></h5>
      <Divider />
      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
        <Search onSearch={handleSearch} onClear={handleClear} />
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
            columns={columns.map((column) => ({
              ...column,
              Filter: column.accessor !== 'No' && column.accessor !== 'Date Registered' ? (
                ({ column }) => (
                  <input
                    type="text"
                    placeholder={`Filter ${column.Header.toLowerCase()}`}
                    onChange={(e) => handleFilter(column, e.target.value)}
                  />
                )
              ) : null,
            }))}
            data={data}
            actions={{ edit: handleEdit, delete: handleDelete, view: handleView }}
            onSort={handleSort}
            onFilter={handleFilter}
          />
        )}
      </div>
    </div>
  );
};

export default Patientlist;
