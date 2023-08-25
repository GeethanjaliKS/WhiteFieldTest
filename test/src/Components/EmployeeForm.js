import React, { useState } from 'react';
import { empreg } from '../Routes/Routes';
import FileBase from 'react-file-base64';

const EmployeeForm = () => {
  
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: []
  });
  const [image, setImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        courses: checked
          ? [...prevData.courses, value]
          : prevData.courses.filter((course) => course !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        image: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile || !formData.designation || !formData.gender || formData.courses.length === 0) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      setErrorMessage('');
    const user = await empreg({
      name: formData.name,
      designation: formData.designation,
      gender: formData.gender,
      courses: formData.courses,
      image: image,
      mobile: formData.mobile,
      email:formData.email
    }).then((res) => res.json());
  
    if (user.message === 'Data already exists') {
      setErrorMessage('Email_id already exists');
      setSuccessMessage('')
    } else {
      console.log(user);
      console.log('Form submitted', formData);
      setSuccessMessage('User registered successfully!');
      setErrorMessage('')
    }}
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 pb-[10%] pt-[5%]">
    <div className="w-full max-w-sm p-10 bg-white rounded shadow-md shadow-slate-900 ">
    {errorMessage && <p className="text-red-500 font-bold text-2xl" style={{fontFamily:'Caprasimo'}}>{errorMessage}</p>}
    {successMessage && <p className="text-red-500 font-bold text-2xl"style={{fontFamily:'Caprasimo'}}>{successMessage}</p>}
    <h1 className="text-3xl font-semibold text-center ">Employee Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
      <label htmlFor="email" className="block font-bold mb-1">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="mobile" className="block font-bold mb-1">
        Mobile Number:
      </label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
    </div>
        
        <div className="mb-4">
          <label htmlFor="designation" className="block font-bold mb-1">
            Designation:
          </label>
          <select
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Designation</option>
            <option value="manager">Manager</option>
            <option value="developer">Developer</option>
            <option value="developer">HR</option>
            <option value="developer">Sales</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-bold">Gender:</label>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
        </div>

        <div className="mb-4">
          <label className="block font-bold">Courses:</label>
          <label className="mr-4">
            <input
              type="checkbox"
              name="courses"
              value="mca"
              checked={formData.courses.includes('mca')}
              onChange={handleChange}
            />{' '}
            MCA
          </label>
          <label>
            <input
              type="checkbox"
              name="courses"
              value="bca"
              checked={formData.courses.includes('bca')}
              onChange={handleChange}
            />{' '}
            BCA
          </label>
          
          <label>
            <input
              type="checkbox"
              name="courses"
              value="bsc"
              checked={formData.courses.includes('bsc')}
              onChange={handleChange}
            />{' '}
            BSC
          </label>
        </div>

        <div>
         <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setImage(base64)}
              />      
              </div>
                <br/>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div></div>
  );
};

export default EmployeeForm;
