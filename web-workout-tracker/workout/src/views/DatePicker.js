import React from "react";
import DateTimePicker from "react-datetime-picker";

const DatePicker = ({date, setDate}) => {
  const onChangeHandler = date => {

    setDate(date)
  };
/*    onChange = date => {
        console.log(typeof date);
        this.setState({date});
    };*/

    return (
        <DateTimePicker
            disableClock="false"
            onChange={onChangeHandler}
            value={date}
            defaultValue={date}
            required
        />
    );
};


export default DatePicker;
