import React from 'react'
import { Tabs, Card, Avatar, Descriptions, Input, DatePicker } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { IoInformation, IoBook } from 'react-icons/io5';
import { UserOutlined, MailOutlined, PhoneOutlined, ReloadOutlined } from '@ant-design/icons';
import { BiCalendar, BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Walkin = () => {
    return (
        <div className="card border-primary py-2 px-2 ">
            <div className="card-body">
                <div className="d-flex justify-content-between aign-items center">
                    <h5 className="card-title h3"><u>Patient Registration</u></h5>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                        <Link to="/patient-list" className="btn btn-primary me-2">Add Patient</Link>
                        <BiEdit style={{ fontSize: 20, marginRight: 12, cursor: "pointer" }} />
                        <ReloadOutlined style={{ fontSize: 20, padding: 8, cursor: "pointer" }} />

                    </div>
                </div>

                <Tabs defaultActiveKey='1'>
                    <TabPane tab="Patient Information">
                        <Avatar className="card-text" size={100}></Avatar>
                        <Descriptions title="Patient Info">
                            <Descriptions.Item label="ID/Passport/Birth No:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="First Name :" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Middle Name:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Descriptions.Item label="Last Name:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Surname:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Gender" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example">
                                    <option selected></option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Date of Birth:" icon={<BiCalendar />}>
                                <DatePicker size='medium'
                                    style={{
                                        width: '80%',
                                    }} />
                            </Descriptions.Item>
                            <Descriptions.Item label="Phone Number:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Email:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Descriptions.Item label="Next of Kin's Name:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Kin's Phone No:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                            <Descriptions.Item label="Relationship:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example">
                                    <option value="--Select Relationship--" className='text-grey'>--Select Relationship--</option>
                                    <option value="Assistant Chairperson">Assistant Chairperson</option>
                                    <option value="Aunt">Aunt</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Brother In Law">Brother In Law</option>
                                    <option value="Business Partner">Business Partner</option>
                                    <option value="Child">Child</option>
                                    <option value="Cousin">Cousin</option>
                                    <option value="Daughter">Daughter</option>
                                    <option value="Deputy Secretary">Deputy Secretary</option>
                                    <option value="Father">Father</option>
                                    <option value="Father In Law">Father In Law</option>
                                    <option value="Fiance">Fiance</option>
                                    <option value="Fiancee">Fiancee</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Guardian">Guardian</option>
                                    <option value="Girlfriend">Girlfriend</option>
                                    <option value="Grand Daughter">Grand Daughter</option>
                                    <option value="Grand Father">Grand Father</option>
                                    <option value="Grand Son">Grand Son</option>
                                    <option value="Grandchild">Grandchild</option>
                                    <option value="Grandmother">Grandmother</option>
                                    <option value="Husband">Husband</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Sister in Law">Sister in Law</option>
                                    <option value="Son">Son</option>
                                    <option value="Wife">Wife</option>
                                </select>
                            </Descriptions.Item>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Descriptions.Item label="Patient Type:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example" style={{ width: '75%' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Insurance:" icon={<IoBook />}>
                                <select className="form-select form-select-sm" aria-label="Default select example" style={{ width: '75%' }}>
                                    <option selected></option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Cash">Cash</option>
                                </select>
                            </Descriptions.Item>
                            <Descriptions.Item label="Membership No:" icon={<IoBook />}><Input
                                style={{
                                    width: '80%',
                                }}
                                defaultValue=""
                            /></Descriptions.Item>
                        </Descriptions>
                    </TabPane>
                </Tabs>
                <div className="d-flex align-items-center justify-content-center gap-3 my-3">
                    <div className=" d-flex text-center gap-3 ">
                        <Link href="#" className="btn btn-primary">Save Patient</Link>
                        <Link href="#" className="btn btn-secondary">Create a Visit</Link>
                        <Link href="#" className="btn btn-primary">Reset Page</Link>
                    </div>
                </div>
            </div>
        </div >)
}

export default Walkin