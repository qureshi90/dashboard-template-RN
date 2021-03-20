import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#AFF',
  // backgroundGradientFromOpacity: 1,
  backgroundGradientTo: '#AFF',
  // backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  // barPercentage: 0.5,
  // useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ['Analytics'], // optional
};

const Bezier = () => {
  return (
    <>
      <LineChart
        data={data}
        width={screenWidth}
        height={250}
        // verticalLabelRotation={10}
        chartConfig={chartConfig}
        bezier
      />
    </>
  );
};

export default Bezier;
