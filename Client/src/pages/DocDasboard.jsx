import React from 'react';
import { UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Card, Space, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import CorporateIncome from '../data/CorporateIncome';
import Area from '../data/Area';
import Donut from '../data/Donut';
import MyCalendar from '../components/Calendar';
import { Dashboardcard } from '../components/Dashboardcard';
import { FaHandHoldingHeart, FaUser } from "react-icons/fa";
import { BiInjection } from "react-icons/bi";
import { TbScissorsOff } from "react-icons/tb";
import DonutChart from '../data/Donut';
import LineChart from '../data/LineChart';
import LineGraph from '../data/LineChart';
import LineChartComponent from '../data/Line';
import RecentActivityFeed from '../components/RecentActivity';

const DocDashboard = () => {
    return (
        <div className='container-fluid mx-0'>
            <div className="row g-2">
                <div className="col-12 col-md-8">
                    <div className="d-block d-md-flex gap-3">
                        <div className="col-12 col-md-6">
                            <MyCalendar className='shadow' />
                        </div>
                        <div className="d-block gap-3 mt-3 mt-md-0">
                            <div className="d-flex gap-3">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={1863}
                                        icon={<FaHandHoldingHeart style={{ color: 'rgba(255,201,5, 0.4)', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: 'rgba(255,201,5, 0.4)', border: '#ccc', borderRadius: '8px' }}
                                    />
                                </Link>
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'patients'}
                                        value={863}
                                        icon={<FaUser style={{ color: '#efbbff', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: '#efbbff', border: '#ccc', borderRadius: '8px' }}
                                    />                                </Link>
                            </div>
                            <div className="d-flex gap-3 mt-3 ">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={363}
                                        icon={<BiInjection style={{ color: '#D1FFBD', fontSize: 38, fontWeight: 'bold', padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: '#D1FFBD', border: '#ccc', borderRadius: '8px' }}
                                    />
                                </Link>
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'patients'}
                                        value={163}
                                        icon={<TbScissorsOff style={{ color: '#ADD8E6', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: '#ADD8E6', border: ' #ccc', borderRadius: '8px' }}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <DonutChart />
                </div>
            </div>
            <div className="row ">
                <div className="col-12 col-md-8">
                    <div className="d-block d-md-flex">
                        <div>
                            <CorporateIncome />
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0 ml-4">
                            <div className="d-flex gap-3">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={1863}
                                        icon={<FaHandHoldingHeart style={{ color: '#D1FFBD', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: 'transparent', border: '1px solid #D1FFBD', borderRadius: '8px' }}
                                    />
                                </Link>
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'patients'}
                                        value={863}
                                        icon={<FaUser style={{ color: '#ADD8E6', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: '#transparent', border: '1px solid #ADD8E6', borderRadius: '8px' }}
                                    />                                </Link>
                            </div>
                            <div className="d-flex gap-3 mt-4">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={1863}
                                        icon={<FaHandHoldingHeart style={{ color: 'rgba(255,201,5, 0.4)', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: 'transparent', border: '1px solid rgba(255,201,5, 0.4)', borderRadius: '8px' }}
                                    />
                                </Link>
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'patients'}
                                        value={863}
                                        icon={<FaUser style={{ color: '#efbbff', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: '8px' }}
                                        className='shadow-lg'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <Area />
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col-12 col-md-8">
                    <div className="d-block d-md-flex">
                        <div>
                            <LineChartComponent />
                        </div>
                        <div className="col-12 col-md-6 mt-3 mt-md-0 ml-4">
                            <div className="d-flex gap-3">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={1863}
                                        icon={<FaHandHoldingHeart style={{ color: '#D1FFBD', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: '#D1FFBD', border: '1px solid #D1FFBD', borderRadius: '8px' }}
                                    />
                                </Link>
                                
                            </div>
                            <div className="d-flex gap-3 mt-4">
                                <Link to='/patient-list' className="text-decoration-none" >
                                    <Dashboardcard
                                        title={'Reports'}
                                        value={1863}
                                        icon={<FaHandHoldingHeart style={{ color: 'rgba(255,201,5, 0.4)', fontSize: 38, padding: 8, borderRadius: 12, backgroundColor: '#fff' }} />}
                                        additionalStyles={{ backgroundColor: 'rgba(255,201,5, 0.4)', border: '1px solid rgba(255,201,5, 0.4)', borderRadius: '8px' }}
                                    />
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <RecentActivityFeed/>
                </div>
            </div>
        </div>
    );
}

export default DocDashboard;
