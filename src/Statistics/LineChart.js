import React from 'react';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    },
  ],
};

const config = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
    
  },
};

const Disease = () => {
  return (
    <LineChart
      data={data}
      width={300}
      height={220}
      yAxisLabel="Disease"
    
      chartConfig={config}
      bezier
      style={{ marginVertical: 8, borderRadius: 16,marginLeft:40 }}
    />
  );
};

export default Disease;
