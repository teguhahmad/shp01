import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TrendChart: React.FC = () => {
  // Mock data for the chart
  const data = [
    { name: 'Jan', Electronics: 4000, Fashion: 2400, Beauty: 2400, Home: 1800 },
    { name: 'Feb', Electronics: 3000, Fashion: 1398, Beauty: 2210, Home: 2000 },
    { name: 'Mar', Electronics: 2000, Fashion: 9800, Beauty: 2290, Home: 2300 },
    { name: 'Apr', Electronics: 2780, Fashion: 3908, Beauty: 2000, Home: 2100 },
    { name: 'May', Electronics: 1890, Fashion: 4800, Beauty: 2181, Home: 2500 },
    { name: 'Jun', Electronics: 2390, Fashion: 3800, Beauty: 2500, Home: 2700 },
    { name: 'Jul', Electronics: 3490, Fashion: 4300, Beauty: 2100, Home: 2800 },
  ];

  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              borderRadius: '8px',
              border: '1px solid #f0f0f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }} 
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Electronics" 
            stroke="#EE4D2D" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="Fashion" 
            stroke="#1A94FF" 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="Beauty" 
            stroke="#10B981" 
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="Home" 
            stroke="#F59E0B" 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;