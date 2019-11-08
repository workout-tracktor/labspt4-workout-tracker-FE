// dev notes
// This view is built by importing two chart components
// It is wrapped in a container div that allows for flexbox to align the components in the desired way
// ProgressCharts also utilizes the details tag to allow for a clean and simple drop down ui containing the charts

import React from "react";
import styled from "styled-components";
import WeeklyWorkoutChart from "../components/WeeklyWorkoutChart";
import WorkoutTypeChart from "../components/WorkoutTypeChart";

export default class ProgressCharts extends React.Component {
  render() {
    return (
      <Charts>
        <ChartsSummary>PROGRESS CHARTS</ChartsSummary>
        <DescriptionText>Last 7 days</DescriptionText>
        <WeeklyWorkoutChart />
        <DescriptionText>Last 7 days by Category</DescriptionText>
        <WorkoutTypeChart />
      </Charts>
    );
  }
}

const ChartsSummary = styled.summary`
  font-size: 24px;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;

const Charts = styled.details`
  margin-top: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  border: none;
`;

const DescriptionText = styled.p`
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
  font-size: 14px;
  opacity: 0.7;
  font-family: Roboto Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
`;