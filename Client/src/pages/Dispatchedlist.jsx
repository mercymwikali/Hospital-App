import React, { useState } from 'react';
import { Divider, Radio, Select, Table } from 'antd';
import { BiCalendar, BiEdit } from 'react-icons/bi';
import { UserOutlined, MailOutlined, PhoneOutlined, ReloadOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
import Input from 'antd/es/input/Input';


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};
const DispatchedList = () => {
    const [searchedText, setsearchedText] = useState('');
    const [selectionType, setSelectionType] = useState('checkbox');


    const columns = [
        {
            dataIndex: '',
            responsive: ['sm'],

        },
        {
            title: 'Admn No',
            dataIndex: 'Admission No',
            responsive: ['sm'],
        },
        {
            title: 'Patient No',
            dataIndex: 'Patient No',
            responsive: ['sm'],
            filters: [
                {
                    text: 'Patient No',
                    value: 'patient-no'
                },
                {
                    text: 'Admission No',
                    value: 'Admission-no'
                },
                {
                    text: 'Names',
                    value: 'Names'
                },

            ],
            filteredValue: [searchedText],
            onFilter: (value, record) => {
                return String(record.Names)
                    .toLowerCase()
                    .includes(value.toLowerCase())
            },

        },
        {
            title: ' Names',
            dataIndex: 'Names',
            responsive: ['sm'],

        },
        {
            title: 'Appmnt Date',
            dataIndex: 'Appointment Date',
            responsive: ['sm'],

        },
        {
            title: 'Appointment Time',
            dataIndex: 'Appointment Time',
            responsive: ['sm'],

        },
        {
            title: 'Appointment Type',
            dataIndex: 'Appointment Type',
            responsive: ['sm'],

        },
        {
            title: 'Doctor',
            dataIndex: 'Doctor',
            responsive: ['sm'],
        },
        {
            title: 'Settlement',
            dataIndex: 'Settlement',
            responsive: ['sm'],
        },
        {
            title: 'Remarks',
            dataIndex: 'Remarks',
            responsive: ['sm'],
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            responsive: ['sm'],
        },
    ];
    const data = [
        {
            key: '1',
            'Admission No': '1',
            'Patient No': 'Patient1',
            'Names': 'John Brown',
            'Appointment Date': '2023-01-01',
            'Appointment Time': '09:00 AM',
            'Appointment Type': 'Regular',
            'Doctor': 'Dr. Smith',
            'Settlement': 'Cash',
            'Remarks': 'Follow-up',
            'Status': 'Scheduled'
        },
        {
            key: '2',
            'Admission No': '2',
            'Patient No': 'Patient2',
            'Names': 'Jim Green',
            'Appointment Date': '2023-02-01',
            'Appointment Time': '10:30 AM',
            'Appointment Type': 'Regular',
            'Doctor': 'Dr. Johnson',
            'Settlement': 'Corporate',
            'Remarks': 'Initial Consultation',
            'Status': 'Completed'
        },
        {
            key: '3',
            'Admission No': '3',
            'Patient No': 'Patient3',
            'Names': 'Joe Black',
            'Appointment Date': '2023-03-01',
            'Appointment Time': '02:15 PM',
            'Appointment Type': 'Urgent',
            'Doctor': 'Dr. Davis',
            'Settlement': 'Credit',
            'Remarks': 'Emergency',
            'Status': 'Canceled'
        },
        {
            key: '4',
            'Admission No': '4',
            'Patient No': 'Patient4',
            'Names': 'Disabled User',
            'Appointment Date': '2023-04-01',
            'Appointment Time': '11:45 AM',
            'Appointment Type': 'Regular',
            'Doctor': 'Dr. Wilson',
            'Settlement': 'Cash',
            'Remarks': 'Follow-up',
            'Status': 'Scheduled'
        },
        {
            key: '5',
            'Admission No': '5',
            'Patient No': 'Patient5',
            'Names': 'Another User',
            'Appointment Date': '2023-05-01',
            'Appointment Time': '03:30 PM',
            'Appointment Type': 'Urgent',
            'Doctor': 'Dr. Brown',
            'Settlement': 'Cash',
            'Remarks': 'Initial Consultation',
            'Status': 'Completed'
        },
    ];

    // Now the 'data' array matches the specified column headers.

    return (
        <div>
            <div className="d-flex justify-content-between aign-items center">
                <h5 className="card-title h4"><u>Dispachted Appointement List</u></h5>
                <BiEdit style={{ fontSize: 20, marginRight: 12, cursor: "pointer" }} />
            </div>
            <Divider />
            <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                <ReloadOutlined style={{ fontSize: 20, padding: 8, cursor: "pointer" }} />
                <div className=" d-flex text-center gap-3">
                    <Link to="/addPatient" className="btn btn-primary">Book New Appointment</Link>
                    <Link href="#" className="btn btn-secondary">View Appointment List</Link>

                    {/* <div className="dropdown">
                        <Link className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Dispatch To
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" to="#">Triage</Link></li>
                            <li><Link className="dropdown-item" to="#">Dialysis</Link></li>
                            <li><Link className="dropdown-item" to="#">Doctor</Link></li>
                            <li><Link className="dropdown-item" to="#">Physio</Link></li>
                            <li><Link className="dropdown-item" to="#">Pharmacy</Link></li>
                            <li><Link className="dropdown-item" to="#">CCC</Link></li>
                            <li><Link className="dropdown-item" to="#">ANC</Link></li>
                        </ul>
                    </div> */}
                    <Link href="#" className="btn btn-primary">Edit Page</Link>
                </div>
            </div>
            <div className="table-responsive-lg">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Select className='w-25' placeholder='Search by . . . ' onSearch={(value)=>{
                        setsearchedText(value);
                    }}>
                        <option value='1'>Patient No</option>
                        <option value='Admission No'>Admission No</option>
                        <option value='Name'>Names</option>

                    </Select>
                    <div className="dropdown border border-1 rounded">
                        <Link className="btn btn-outline-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Export File To
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" to="#">CSV</Link></li>
                            <li><Link className="dropdown-item" to="#">PDF</Link></li>
                            <li><Link className="dropdown-item" to="#">EXCEL</Link></li>
                            <li><Link className="dropdown-item" to="#">PRINT</Link></li>
                        </ul>
                    </div>

                </div>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    size='small'
                    columns={columns}
                    dataSource={data}
                    scroll='scroll'
                    style={{ color: "#fff" }}
                    className='table'
                />
            </div>

        </div>
    );
};
export default DispatchedList;