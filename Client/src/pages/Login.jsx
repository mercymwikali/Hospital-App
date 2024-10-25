import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Card, message } from 'antd';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSignIn from '../hooks/useSignIn'; // Assuming this is your custom hook
import InputField from '../components/InputField';

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin, loading, error } = useSignIn();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const ref = userRef.current;
    if (ref) {
      ref.focus();
    }
  }, []);

  useEffect(() => {
    if (error) {
      setErrMsg(error);
      errRef.current?.focus();
    } else {
      setErrMsg('');
    }
  }, [error]);

  const onFinish = () => {
    handleLogin();
  };

  return (
    <div className="regContainer">
      <section>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <Card title="Sign In" headStyle={{ backgroundColor: '#002329', color: '#fff' }}>
          <Form onFinish={onFinish}>
            <label htmlFor="email"> <FaUser /> Email:</label>
            <InputField
              type="email"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <div className="mt-2">
              <label htmlFor="password"><RiLockPasswordFill /> Password:</label>
              <InputField
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="mt-3 w-100">
              <Button type="primary" htmlType="submit" block loading={loading}>
                Sign In
              </Button>
            </div>
          </Form>
          <div className="my-3 text-center">
            <span>Don't have an account? <Link to="/register">Register here</Link></span> {/* Add the Register link */}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Login;
