import React from "react";
import DateTimePicker from "react-datetime-picker";
import "./DatePicker.css";
class DatePicker extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <DateTimePicker
          inputProps={{ className: "react-calendar" }}
          disableClock="false"
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default DatePicker;
