import React, { useState} from 'react';
import { useNavigate, Link } from "react-router-dom";
import { login } from '../api_services/AuthService'; 
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };

  const handleLoginClick = async () => {
    const { jwt, success } = await login({ username, password }); 
    console.log()

    if (success) {
      localStorage.setItem('travel-journal-jwt', jwt);
      navigate('/home'); 
    } else {
      alert('Error logging in')
    }
  }; 

  return (
    <>
    <h1 className="login-title">Welcome to Your Travel Journal!</h1>
    <div className="login-container">
      <Form
        name="normal_login"
        className="login-form"
        onFinish={handleLoginClick}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="username"
          onChange={(event) => handleUsernameChange(event)}
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          onChange={(event) => handlePasswordChange(event)}
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className='login-options'>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button onClick={() => handleLoginClick()} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          <Link to='/register' className='register-link'>Register now!</Link>
        </Form.Item>
      </Form>
      </div>
      </>
  );
};

export default Login;
