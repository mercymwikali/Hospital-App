import React, { useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import SelectField from '../components/SelectField';

const data = [
  { name: 'Cardiology', value: 40 },
  { name: 'Neurology', value: 20 },
  { name: 'Dermatology', value: 30 },
];

const filterOptions = [
  { label: 'Weekly', value: 'Weekly' },
  { label: 'Monthly', value: 'Monthly' },
  { label: 'Yearly', value: 'Yearly' }, // Corrected the value to 'Yearly'
];

const COLORS = ['#006edc', '#efbbff', '#ffc905'];

const DonutChart = () => {
  const [filter, setFilter] = useState('Weekly'); // Default filter is set to 'Weekly'

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // You can implement filtering logic based on the selected filter here
    // For example, you can fetch data for the selected filter
  };

  return (
    <div>
      <h4>Medical Specialties Distribution</h4>
      <div>
        <label>
          Filter by:
          <SelectField
            options={filterOptions}
            placeholder="--Select Period--"
            onChange={(value) => handleFilterChange(value)}
            value={filter}
            disabled={false}
          />
        </label>
      </div>
      <ResponsiveContainer width={350} height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="left" align="vertical" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;