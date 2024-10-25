// Button.jsx

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonGroup = ({ type, onClick, children, disabled, icon }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} icon={icon}>
      {children}
    </Button>
  );
};

ButtonGroup.propTypes = {
  type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text', 'block']),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

ButtonGroup.defaultProps = {
  type: 'default',
  disabled: false,
};

export default ButtonGroup;
