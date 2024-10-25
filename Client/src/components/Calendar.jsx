import React, { useState } from 'react';
import Calendar from 'react-calendar';
import PropTypes from 'prop-types';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ onChange, value, disabled, placeholder }) => {
  const [calendarValue, setCalendarValue] = useState(value);

  const handleCalendarChange = (newValue) => {
    setCalendarValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Calendar
      onChange={handleCalendarChange}
      value={calendarValue}
      disabled={disabled}
      style={{ width: '100%' }}
    />
  );
};

MyCalendar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default MyCalendar;
