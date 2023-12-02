import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

function CustomPieChart({ posts }) {
  const data = [
    { name: 'User 1', value: posts.length },
    { name: 'Other Users', value: 100 - posts.length },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default CustomPieChart;
