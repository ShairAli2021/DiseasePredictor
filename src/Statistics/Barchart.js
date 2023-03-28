import { PieChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Allergy',
    value: 35,
    color: 'rgba(0, 255, 255, 0.5)', // green color
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Diabetes',
    value: 25,
    color: 'rgba(0, 255, 0, 0.75)', // green color
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Diabetes A',
    value: 25,
    color: 'rgba(0, 100, 200, 0.75)', // green color
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Hepatitis',
    value: 10,
    color: 'rgba(255, 255, 0, 1)', // green color
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const PChart = () => {
  return (
    <PieChart
      data={data}
      width={400}
      height={220}
      chartConfig={{
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      accessor="value"
      backgroundColor="transparent"
      paddingLeft="15"
    />
  );
};

export default PChart;
