import React, { forwardRef } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

const InputField = forwardRef(({
  placeholder,
  onChange,
  value,
  disabled,
  type,
  id,
  required,
  'aria-invalid': ariaInvalid,
  'aria-describedby': ariaDescribedby,
  onFocus,
  onBlur,
  autoComplete,
}, ref) => {
  return (
    <Input
      placeholder={placeholder}
      id={id}
      ref={ref}
      onChange={onChange}
      value={value}
      disabled={disabled}
      type={type}
      required={required}
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedby}
      onFocus={onFocus}
      onBlur={onBlur}
      autoComplete={autoComplete}
    />
  );
});

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  'aria-invalid': PropTypes.string,
  'aria-describedby': PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
};

export default InputField;
