// dev notes
// This component renders the total number of workouts over the last 7 days
// We used react-chartjs-2 to import the chartjs library and integrate it into react
// The dataset is compiled of the total number of logged workouts on each day within
// a seven day range
// The chart itself is wrapped in a container that allows for resizing and div styles
// The chart styling is done using methods stored on the chart object imported from the
// library.

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import styled from "styled-components";

export default class WeeklyWorkoutChart extends React.Component {
  constructor(props) {
    super(props);
  }
  data = {
    labels: ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "WORKOUTS",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: "rgba(36, 103, 254, 0.4)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1
      }
    ]
  };

  render() {
    return (
      <ChartContainer>
        <Line
          data={this.data}
          width={370}
          height={370}
          options={{
            legend: {
              display: true,
              position: "top",
              labels: {
                fontColor: "#fff"
              }
            },
            scales: {
              xAxes: [
                {
                  gridLines: {
                    color: "rgba(255, 255, 255, 0.1)"
                  },
                  ticks: {
                    fontColor: "#696f87",
                    opacity: "0.3"
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    color: "rgba(255, 255, 255, 0.1)"
                  },
                  ticks: {
                    fontColor: "#696f87",
                    opacity: "0.3"
                  }
                }
              ]
            }
          }}
        />
      </ChartContainer>
    );
  }
}

const ChartContainer = styled.div`
  margin-bottom: 40px;
`;