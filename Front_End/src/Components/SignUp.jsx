import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    gender: 'Male',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      alert('Emails do not match');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5001/api/user/register', formData);
      console.log(res.data.message);
      console.log(res.data.user);
      console.log(formData);
      // Redirect to login or dashboard
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('./assets/BG.png')] bg-no-repeat bg-cover ">
      <div className="w-full max-w-md  rounded-lg  p-6 bg-gray-200 m-16 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
        <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <input
            name="firstname"
            placeholder="First Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            name="lastname"
            placeholder="Last Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="confirmEmail"
            placeholder="Confirm Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            name="dateOfBirth"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2"
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <p className="text-gray-900 mt-4"> Already have an account? <Link to="/LandingPage"><a className="text-sm text-orange-500 hover:underline mt-4" href="#">Login</a></Link></p>
          <button
            className="bg-gradient-to-r from-orange-500 to-orange-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-orange-600 hover:to-orange-600 transition ease-in-out duration-150"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
