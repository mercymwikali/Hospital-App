import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Line, Tooltip, Legend, XAxis, YAxis, LineChart } from 'recharts';
import { Select } from 'antd';

const data = [
  { name: 'Cardiology', value: 40 },
  { name: 'Neurology', value: 20 },
  { name: 'Dermatology', value: 30 },
];

const filterOptions = [
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Years', value: 'Years' },
];

const COLORS = ['#006edc', '#efbbff', '#ffc905'];

const LineGraph = () => {
  const [filter, setFilter] = useState('Weekly');
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    // Implement your filtering logic here based on the selected filter
    // For simplicity, I'm using a direct mapping between filter values and data
    const filtered = {
      Weekly: data,
      Monthly: data.map(entry => ({ ...entry, value: entry.value * 2 })),
      Years: data.map(entry => ({ ...entry, value: entry.value * 5 })),
    }[filter];

    setFilteredData(filtered || data);
  }, [filter]);

  return (
    <div>
      <h4>Medical Specialties Distribution</h4>
      <div>
        <label>
          Filter by:
          <Select
            className='mx-2'
            defaultValue="Weekly"
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
      <ResponsiveContainer width={500} height={300}>
        <LineChart data={filteredData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {filteredData.map((entry, index) => (
            <Line key={`line-${index}`} type="monotone" dataKey="value" name={entry.name} stroke={COLORS[index % COLORS.length]} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
