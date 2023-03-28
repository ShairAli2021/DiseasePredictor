import { Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import PGraph from '../Statistics/Barchart';
import Disease from '../Statistics/LineChart';



const Graph = () => {
  return (
 <>
  <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 16 }}>Statistics Representation</Text>
 
    <Disease/>

    <PGraph/>
    </>

  );
};

export default Graph;
