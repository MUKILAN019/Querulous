import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    gender: 'Male',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('./assets/BG.png')] bg-no-repeat bg-cover ">
      <div className="w-full max-w-md  rounded-lg  p-6 bg-gray-200 m-16 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
        <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <input
            name="firstName"
            placeholder="First Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            name="confirmEmail"
            placeholder="Confirm Email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            value={formData.confirmEmail}
            onChange={handleChange}
          />
          <input
            name="password"
            placeholder="Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          
          <select
            name="gender"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          
          <input
            name="age"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2"
            id="age"
            type="date"
            value={formData.age}
            onChange={handleChange}
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
