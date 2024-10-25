import { Card, Space, Statistic } from 'antd';
import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';


export function Dashboardcard({ title, value, icon, additionalStyles, text, precision, valueStyle, prefix, suffix }) {
    return (
        <Card style={additionalStyles}>
            <Space direction='vertical'>
                <Space direction='horizontal'>
                    {icon}
                    <Statistic
                        title={title}
                        value={value}
                        precision={precision}
                        valueStyle={valueStyle}
                        prefix={prefix}
                        suffix={suffix}
                    />
                </Space>
            </Space>
        </Card>
    );
}

