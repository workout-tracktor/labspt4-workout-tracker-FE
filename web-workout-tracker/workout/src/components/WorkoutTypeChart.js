// dev notes
// This component renders the total number of workouts by category over the last 7 days
// We used react-chartjs-2 to import the chartjs library and integrate it into react
// The dataset is compiled of the total number of logged workouts by category on each day within
// a seven day range
// The chart itself is wrapped in a container that allows for resizing and div styles
// The chart styling is done using methods stored on the chart object imported from the
// library.

import React from "react";
import { Bar, Line, Radar, Doughnut } from "react-chartjs-2";
import styled from "styled-components";

export default class WorkoutTypeChart extends React.Component {
  constructor(props) {
    super(props);
  }
  data = {
    labels: ["ARMS", "CHEST", "BACK", "LEGS", "SHOULDERS", "ABS"],
    datasets: [
      {
        label: "WORKOUTS",
        data: [2, 14, 8, 11, 14, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(255, 159, 64, 0.4)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  render() {
    return (
      <ChartContainer>
        <Doughnut
          data={this.data}
          width={370}
          height={370}
          options={{
            legend: {
              labels: {
                fontColor: "#fff"
              }
            }
          }}
        />
      </ChartContainer>
    );
  }
}

const ChartContainer = styled.div``;