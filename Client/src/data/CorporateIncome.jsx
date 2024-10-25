import React, { useState, useEffect } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { Select } from 'antd';

const data = [
  {
    name: 'Jan.',
    Corporate: 18.9,
    Cash: 12.4,
  },
  {
    name: 'Feb.',
    Corporate: 28.8,
    Cash: 23.2,
  },
  {
    name: 'Mar.',
    Corporate: 39.3,
    Cash: 34.5,
  },
  {
    name: 'Apr.',
    Corporate: 81.4,
    Cash: 99.7,
  },
  {
    name: 'May',
    Corporate: 47,
    Cash: 52.6,
  },
  {
    name: 'Jun.',
    Corporate: 20.3,
    Cash: 35.5,
  },
  {
    name: 'Jul.',
    Corporate: 24,
    Cash: 37.4,
  },
  {
    name: 'Aug.',
    Corporate: 35.6,
    Cash: 42.4,
  },
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Corporate', value: 'Corporate' },
  { label: 'Cash', value: 'Cash' },
];

const CorporateIncome = () => {
  const [filter, setFilter] = useState('all');
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    // Implement your filtering logic here based on the selected filter
    // For simplicity, I'm using a direct mapping between filter values and data
    const filtered = {
      all: data,
      Corporate: data.map(entry => ({ name: entry.name, Corporate: entry.Corporate })),
      Cash: data.map(entry => ({ name: entry.name, Cash: entry.Cash })),
    }[filter];

    setFilteredData(filtered || data);
  }, [filter]);

  return (
    <div>
      <h4>Average Monthly Income</h4>
      <div>
        <label>
          Filter by:
          <Select
            className='mx-2'
            defaultValue="all"
            onChange={handleFilterChange}
          >
            {filterOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </label>
      </div>
      <ResponsiveContainer width={400} height={300}>
        <BarChart width={400} height={300} data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {filter === 'all' && (
            <>
              <Bar dataKey="Corporate" fill="#ffc905" name="Corporate" />
              <Bar dataKey="Cash" fill="#006edc" name="Cash" />
            </>
          )}
          {filter === 'Corporate' && <Bar dataKey="Corporate" fill="#ffc905" name="Corporate" />}
          {filter === 'Cash' && <Bar dataKey="Cash" fill="#006edc" name="Cash" />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CorporateIncome;
