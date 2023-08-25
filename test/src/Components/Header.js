import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; 


const Header = ({ isLoggedIn,adminname }) => {
  const navigate=useNavigate();
  
  
  
  localStorage.getItem("user")
  const handleLogout = () => {
    const remove=localStorage.removeItem('user');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
   }



  return (
    <header className="bg-blue-100 py-3 shadow-xl">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={require('./image/logo.jpg')}
            alt="Logo"
            className="h-20 w-20"
          />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          
          {isLoggedIn ? (
            <>
            
              <Link
                to="/adminpage"
                className="text-blue-900 hover:text-gray-950 font-medium text-base"
              >
                Home
              </Link>
              <Link
                to="/emp"
                className="text-blue-900 hover:text-gray-950 font-medium text-base"
              >
                Create Employee
              </Link>
              <Link
                to="/emptable"
                className="text-blue-900 hover:text-gray-950 font-medium text-base"
              >
                Employee List
              </Link>
              <span className="text-blue-900 hover:text-gray-950 font-medium text-base">
              WelCome,  {adminname}
              </span>
              <button
              className="text-white py-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              onClickCapture={handleLogout}
            >
              Logout
            </button>
           
            </>
              
          ) : (
            
            <Link
              to="/login"
              className="text-blue-900 hover:text-gray-950 font-medium text-base"
            >
              Login
            </Link>
          )}
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
