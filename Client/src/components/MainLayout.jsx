import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { AppstoreOutlined, UserOutlined, CheckSquareOutlined, DropboxCircleFilled, MenuFoldOutlined, MenuUnfoldOutlined,  BellFilled } from '@ant-design/icons';
import { Layout, Menu, theme, Button, Avatar, Badge, Breadcrumb } from 'antd';
import { FaWheelchair, FaUserDoctor, FaUserNurse, FaEyeDropper, FaRadiation, } from "react-icons/fa6"
import { BiPurchaseTag } from "react-icons/bi"
import { GiMedicines, GiSoapExperiment } from 'react-icons/gi'
import {TbMassage, TbDental } from 'react-icons/tb'
import { LuBaby } from 'react-icons/lu'
import {  IoNutritionSharp } from 'react-icons/io5'
import Sigonout from './Signout';
import logo from '../assets/images/logo.png'

const { Header, Content, Footer, Sider } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [openKeys, setOpenKeys] = useState(['/']);
    const rootSubmenuKeys = [
        '/',
        '/patient-registration',
        '/appointements',
        '/triage',
        '/doctors',
        '/procurement',
        '/Protocal and Guidelines',
        '/Dental',
        '/nurses',
        '/Pharmacy',
        '/Radiology',
        '/theatre',
        '/Laboratory',
        '/dialysis',
        '/MCH',
        '/Physio',
        '/Nutrition',
    ];

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout className='mt-0' >
            <Sider
                className='sidemenu'
                trigger={null}
                collapsible collapsed={collapsed}
                breakpoint="md"
                collapsedWidth={collapsed ? 0 : 230}
                inlineCollapsed={collapsed}
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['/']}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    onClick={({ key }) => {
                        navigate(key);
                    }}
                    style={{
                        backgroundColor: 'transparent',
                        height: '100%',
                        color: '#fff',
                        paddingTop: '70px',
                        paddingBottom: '90px',
                        overflowY: 'scroll',
                        transition: '0.2s ease'
                    }}
                    items={[
                        {
                            key: '/',
                            icon: <AppstoreOutlined style={{ color: '#fff' }} />,
                            label: 'Dashboard',
                        },
                        {
                            key: '/patient-registration',
                            icon: <FaWheelchair style={{ color: '#fff' }} />,
                            label: ' Patient Registration',
                            children: [
                                {
                                    key: '/addPatient',
                                    label: 'Add Patient'
                                },
                                {
                                    key: '/patient-list',
                                    label: 'Patient List'
                                },
                            ]
                        },
                        {
                            key: '/appointements',
                            icon: <CheckSquareOutlined style={{ color: '#fff' }} />,
                            label: 'Appointements',
                            children: [
                                {
                                    key: '/add-appointment',
                                    label: 'Add Appointment'
                                },
                                {
                                    key: '/Appointment-list',
                                    label: 'Appointment List'
                                },
                                {
                                    key: '/Dispatched-List',
                                    label: 'Dispatched List'
                                },
                            ]
                        },
                        {
                            key: '/triage',
                            icon: <DropboxCircleFilled style={{ color: '#fff' }} />,
                            label: 'Triage',
                            children: [
                                {
                                    key: '/observation-list',
                                    label: 'Observation List'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/dispatched-observation-list',
                                    label: 'Dispatched Observation List'
                                },
                                {
                                    key: '/patient-list',
                                    label: 'Patient List'
                                },
                            ]
                        },
                        {
                            key: '/doctors',
                            icon: <FaUserDoctor style={{ color: '#fff' }} />,
                            label: 'Doctor',
                            children: [
                                {
                                    key: '/Outpatient-visits',
                                    label: 'Outpatient visits'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Inpatient'
                                },
                                {
                                    key: '/past-doctor-visit',
                                    label: 'Past Doctor Visit'
                                },
                                {
                                    key: 'Patient-Amdn',
                                    label: 'Patient Admission'
                                },
                                {
                                    key: '/MCH-outpatient',
                                    label: 'MCH Outpatient'
                                },
                                {
                                    key: '/theatre-day-case',
                                    label: 'Theatre'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/anaesthetistia',
                                    label: 'Anaesthestia'
                                },
                                {
                                    key: '/Surgeon',
                                    label: 'Surgeon'
                                },
                                {
                                    key: '/Discharge-req',
                                    label: 'Discharge Requests'
                                },
                                {
                                    key: '/Discharge-list',
                                    label: 'Discharge List'
                                },
                                {
                                    key: '/pharmacy-list-Outpatient',
                                    label: 'Pharmacy List Outpatient'
                                },
                                {
                                    key: '/Pharmacy-list-inpatient',
                                    label: 'Pharmacy List Inpatient'
                                },
                                {
                                    key: '/Pharmacy-history',
                                    label: 'Pharmacy History'
                                },
                                {
                                    key: '/pharmacy-list-returns',
                                    label: 'Pharmacy List Returns'
                                },
                                // {
                                //     key: '/purchase-req',
                                //     label: 'Purchase Requisition'
                                // },
                            ]
                        },
                        {
                            key: '/procurement',
                            icon: <BiPurchaseTag style={{ color: '#fff' }} />,
                            label: 'Procurement/Store',
                            children: [
                                {
                                    key: '/purchase-req',
                                    label: 'Purchase Requisition'
                                }
                            ]
                        },
                        {
                            key: '/Protocal and Guidelines',
                            type: 'group',
                            label: 'Protocal and Guidelines',
                        },
                        {
                            key: '/Dental',
                            icon: <TbDental style={{ color: '#fff' }} />,
                            label: 'Dental',
                            children: [
                                {
                                    key: '/Dental-outpatient',
                                    label: 'Outpatient'
                                },
                                {
                                    key: '/Dental-inpatient',
                                    label: 'Inpatient'
                                },
                            ]
                        },
                        {
                            key: '/nurses',
                            icon: <FaUserNurse style={{ color: '#fff' }} />,
                            label: 'Nurse',
                            children: [
                                {
                                    key: 'Patient-Amdn',
                                    label: 'Admit Patient'
                                },
                                {
                                    key: '/Ward-Management',
                                    label: 'Ward Management'
                                },
                                {
                                    key: '/Outpatient-visits',
                                    label: 'Outpatient visits'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatients'
                                },
                                {
                                    key: '/past-doctor-visit',
                                    label: 'Past Doctor Visit'
                                },

                                {
                                    key: '/theatre-Nurse',
                                    label: 'Theatre Nurse'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                                {
                                    key: '/Discharge-req',
                                    label: 'Discharge Requests'
                                },
                                {
                                    key: '/Discharge-list',
                                    label: 'Discharge List'
                                },
                                // {
                                //     key: '/purchase-req',
                                //     label: 'Purchase Requisition'
                                // },
                            ]
                        },
                        {
                            key: '/Pharmacy',
                            icon: <GiMedicines style={{ color: '#fff' }} />,
                            label: 'Pharmacy',
                            children: [
                                {
                                    key: '/pharmacy-list-Outpatient',
                                    label: 'Pharmacy List Outpatient'
                                },
                                {
                                    key: '/Pharmacy-list-inpatient',
                                    label: 'Pharmacy List Inpatient'
                                },
                                {
                                    key: '/Pharmacy-history',
                                    label: 'Pharmacy History'
                                },
                                {
                                    key: '/pharmacy-list-returns',
                                    label: 'Pharmacy List Returns'
                                },
                                {
                                    key: '/procedure-queues',
                                    label: 'Procedure Queues'
                                },
                            ]
                        },
                        {
                            key: '/Radiology',
                            icon: <FaRadiation style={{ color: '#fff' }} />,
                            label: 'Radiology',
                            children: [
                                {
                                    key: '/Radiology-list-Outpatient',
                                    label: 'Radiology List Outpatient'
                                },
                                {
                                    key: '/Radiology-list-inpatient',
                                    label: 'Radiology List Inpatient'
                                },
                                {
                                    key: '/Radiology-history',
                                    label: 'Radiology History'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                // {
                                //     key: '/procedure-queues',
                                //     label: 'Procedure Queues'
                                // },
                            ]
                        },
                        {
                            key: '/theatre',
                            icon: <FaEyeDropper style={{ color: '#fff' }} />,
                            label: 'Theatre',
                        },
                        {
                            key: '/Laboratory',
                            icon: <GiSoapExperiment style={{ color: '#fff' }} />,
                            label: 'Laboratory',
                            children: [
                                {
                                    key: '/Lab-list-Outpatient',
                                    label: 'Laboratory Outpatient List'
                                },
                                {
                                    key: '/Lab-list-inpatient',
                                    label: 'Laboratory Inpatient List'
                                },
                                {
                                    key: '/Lab-history',
                                    label: 'Laboratory History'
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatient'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                                {
                                    key: '/treatment-sheet',
                                    label: 'Treatment Sheet'
                                },
                                {
                                    key: '/Price-list',
                                    label: 'Price List'
                                },
                            ]
                        },
                        {
                            key: '/dialysis',
                            icon: <FaEyeDropper style={{ color: '#fff' }} />,
                            label: 'Dialysis',
                            children: [
                                {
                                    key: '/Nurse',
                                    label: 'Nurse'
                                },
                                {
                                    key: '/Doctor',
                                    label: "Doctor"
                                },
                                {
                                    key: '/Inpatient',
                                    label: 'Current Inpatient'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },
                            ]
                        },
                        {
                            key: '/MCH',
                            icon: <LuBaby style={{ color: '#fff' }} />,
                            label: 'MCH',
                            children: [
                                {
                                    key: '/MCH-outpatient',
                                    label: 'MCH Outpatient'
                                },
                                {
                                    key: '/Mother-list',
                                    label: "Mother's List"
                                },
                                {
                                    key: '/Child-list',
                                    label: 'Children  List'
                                },
                                {
                                    key: '/MCH',
                                    label: 'MCH'
                                },
                            ]
                        },
                        {
                            key: '/Physio',
                            icon: <TbMassage style={{ color: '#fff' }} />,
                            label: 'Physiotherapy',
                            children: [
                                {
                                    key: '/Physio-list-Outpatient',
                                    label: 'Physio Outpatient List'
                                },
                                {
                                    key: '/Physio-list-inpatient',
                                    label: 'Physio Inpatient List'
                                },
                                {
                                    key: '/Physio-history',
                                    label: 'Laboratory History'
                                },
                                {
                                    key: '/Physio-Gym-list',
                                    label: 'Physio Gym List'
                                },
                                {
                                    key: '/walk-in',
                                    label: 'Walk In List'
                                },

                            ]
                        },
                        {
                            key: '/Nutrition',
                            icon: <IoNutritionSharp style={{ color: '#fff' }} />,
                            label: 'Nutrition',
                            children: [
                                {
                                    key: '/Nutrition-outpatient-list',
                                    label: 'Nutrition Outpatient List'
                                },
                                {
                                    key: '/Nutrition-Inpatient-list',
                                    label: 'Nutrition-Inpatient-list'
                                },
                            ]
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        backgroundColor: '#002329',
                        zIndex: 1
                    }}
                    className='header'

                >
                    <div className="d-flex justify-content-evenly align-items-center">
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '22px',
                                width: 64,
                                height: 64,
                                color:'#fff'
                            }}
                        // className='d-sm-none d-md-block'
                        />
                        <div className="logo text-center px-2">
                            <img
                                src={logo}
                                height={60}
                                style={{ maxWidth: collapsed ? '80px' : '100%', marginTop: '0' }}
                                alt="Logo"
                            />
                        </div>
                    </div>

                    <Sigonout />


                </Header>

                <Layout>
                    <Breadcrumb
                        style={{
                            marginLeft: collapsed ? 80 : 230,
                            color: '#67336d',
                            padding: 12,
                            transition: 'all 0.2s',

                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item >App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className='contentStyle'
                        style={{
                            marginLeft: collapsed ? 80 : 230,
                            transition: 'all 0.2s',
                            padding: 24,
                            background: colorBgContainer,

                        }}>
                        <Outlet />
                    </Content>
                </Layout>

                <Footer
                    style={{
                        textAlign: 'center',
                        color: '#67336d'
                    }}
                >
                    HMIS ©2023 Created by MayFair
                </Footer>
            </Layout>
        </Layout >
    );
};

export default MainLayout;