import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./App.css";

const LoginPage = () => {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Define the username and password statically
    if (formData.username !== 'pargol') {
      setError('Invalid username.');
      return;
    }

    if (formData.password !== 'pargol') {
      setError('Invalid password.');
      return;
    }

    navigate('/setup');
  };

  return (
    <div id="login">
      <div class="container">
      <h1>Translation App</h1>
        <div id="login-row" class="row justify-content-center align-items-center">
          <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">
              <form onSubmit={handleOnSubmit}>
                <h3 class="text-center text-info">Login</h3>
                  <div class="form-group">
                    <label class="text-info" for="username">Username:</label><br/>
                    <input class="form-control" type="text" name="username" value={formData.username} onChange={handleInputChange} />
                  </div>
                  <div class="form-group">
                    <label class="text-info" for="password" >Password:</label><br/>
                    <input class="form-control" type="text" name="password" value={formData.password} onChange={handleInputChange} />
                  </div>
                  <div class="form-group">
                    <input type="submit" name="submit" class="btn btn-info btn-md" value="Login" />
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default LoginPage;