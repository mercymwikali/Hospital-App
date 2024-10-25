import React, { useState } from 'react';
import { notification, Button } from 'antd';
import { CheckCircleOutlined, InfoCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const Notification = () => {
  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
    });
  };

  return (
    <div>
      <h1>Notifications Component</h1>
      <Button
        type="primary"
        onClick={() =>
          openNotification('success', 'Success Notification', 'This is a success message.')
        }
      >
        Success
      </Button>
      <Button
        type="default"
        onClick={() =>
          openNotification('info', 'Info Notification', 'This is an informational message.')
        }
      >
        Info
      </Button>
      <Button
        type="danger"
        onClick={() =>
          openNotification('error', 'Error Notification', 'This is an error message.')
        }
      >
        Error
      </Button>
    </div>
  );
};

export default Notification;
