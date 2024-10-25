import { Card, Form, message, Button, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FiEyeOff } from 'react-icons/fi';
import InputField from '../components/InputField';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Link, useNavigate } from 'react-router-dom';

const USER_REGEX = /^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [role, setRole] = useState('Admin'); // Default role
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error, userInfo } = useSelector((state) => state.userRegister);

  useEffect(() => {
    if (success) {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      message.success(success, 5);
      navigate('/login', { replace: true });
    }
    if (error) {
      message.error(error, 5);
    }
  }, [success, error, navigate, userInfo]);

  const onFinish = () => {
    if (USER_REGEX.test(fname) && password === matchPwd) {
      dispatch(register({ fname, lname, email, password, role }));
    } else {
      message.error('Please check your inputs!');
    }
  };

  return (
    <div className="regContainer">
      <section>
        <Card title={'Register Account'} headStyle={{ backgroundColor: '#0060a3', color: '#fff' }}>
          <Form onFinish={onFinish}>
            <div className="mt-2">
              <label htmlFor="fname">
                <FaUser /> First Name :
                <FaCheckCircle className={USER_REGEX.test(fname) ? "valid" : "hide"} />
                <FaTimesCircle className={!USER_REGEX.test(fname) ? "invalid" : "hide"} />
              </label>
              <InputField
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="lname">
                <FaUser /> Last Name :
              </label>
              <InputField
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="email">Email :</label>
              <InputField
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="password">
                <RiLockPasswordFill /> Password :
              </label>
              <InputField
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="confirm_pwd">
                <FiEyeOff /> Confirm Password :
              </label>
              <InputField
                type="password"
                id="confirm_pwd"
                value={matchPwd}
                onChange={(e) => setMatchPwd(e.target.value)}
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="role">Role :</label>
              <Select
                id="role"
                value={role}
                onChange={(value) => setRole(value)} // updated to handle the selected value
                required
                className='w-100 text-center'
              >
                <Select.Option value="Doctor" className='text-center'>Doctor</Select.Option>
                <Select.Option value="Admin" className='text-center'>Admin</Select.Option>
                <Select.Option value="Nurse" className='text-center'>Nurse</Select.Option>

              </Select>
            </div>

            <div className="mt-3 w-100">
              <Button
                type="primary"
                htmlType="submit"
                className='w-100'
                disabled={!USER_REGEX.test(fname) || password !== matchPwd}
              >
                Register
              </Button>
            </div>
          </Form>
          <div className="my-3 text-center">
            <span>Already have an account?<Link to="/login">Login</Link></span> {/* Add the Register link */}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Register;
