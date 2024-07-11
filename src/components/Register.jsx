import { register } from '../api_services/AuthService'; 
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import './Register.css'

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); 
  };

  const handleRegisterClick = async () => {
    const { jwt, success } = await register({ username, password }); 

    if (success) {
      localStorage.setItem('travel-journal-jwt', jwt);
      navigate('/home'); 
    } else {
      alert('Error registering')
    }
  }; 

  return (
    <div className="register-container">
    <h1 className='register-title'>Register</h1>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={()=> handleRegisterClick()}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username"
        onChange={(event) => handleUsernameChange(event)}
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        onChange={(event) => handlePasswordChange(event)}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button onClick={()=> handleRegisterClick()} type="primary" htmlType="submit">
          Register
        </Button>
        <Link to='/' className='login-link'>Already have an account?</Link>
      </Form.Item>
    </Form>
    </div>
  );
}

export default Register; 