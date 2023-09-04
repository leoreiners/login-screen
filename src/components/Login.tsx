import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'semantic-ui-react';
import logo from '../images/cleanmycar_logo_nobg.png';
import './Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please provide both email and password.');
      return;
    }
  };

  return (
    <Container className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Logo" />
        <p>India´s first waterless car cleaning company</p>
      </div>
      <div className="login-form">
        <Link to="/need-help" className="need-help-link">
          Need Help?
        </Link>
        <h1>Log in</h1>
        <Form className="login-form" onSubmit={handleLogin}>
          <Form.Field>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="joe@email.com"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Field>
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </Link>
          <Button primary type="submit" className="login-button fluid">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
