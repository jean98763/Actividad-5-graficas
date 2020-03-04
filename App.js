import React, { Component } from 'react';
import { Text, View, Button, Dimensions } from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

export default class App extends Component  {
  constructor (props) {
    super(props)
    this.state = {
      dataChart: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
      ]
      ,
      dataPie1: Math.random() * 1000,
      dataPie2: Math.random() * 1000 
    }
    
 }
 
 
 

  render() {
    const dataPie = [
      {
        name: "Seoul",
        population: this.state.dataPie1,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Toronto",
        population: this.state.dataPie2,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
    ];
    return (
      <View>
  <Text>Bezier Line Chart</Text>
  <Button
          title="generar aleatorio"
          onPress={ this.generarAleatorio }
  />
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: this.state.dataChart
        }
      ]
    }}
    width={ screenWidth } // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />

      <Button
          title="generar aleatorio pie"
          onPress={ this.generarAleatorioPie }
      />

<PieChart
  data={dataPie}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>
</View>
    );
  }

  generarAleatorio = () =>{
    this.setState({ 
      dataChart : 
        [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
    })
  };

  generarAleatorioPie = () =>{
    this.setState({ 
      dataPie1: Math.random() * 100,
      dataPie2: Math.random() * 100
    })
  };
}