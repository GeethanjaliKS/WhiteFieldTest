import React, { useState } from 'react';
import { empreg, updatemp } from '../Routes/Routes';
import FileBase from 'react-file-base64';

const UpadteFarm = (props) => {
  const{updateFormData,updateForm}=props;
  console.log(updateFormData)
  const [formData, setFormData] = useState({
    name: updateFormData.f_Name,
    email: updateFormData.f_Email,
    mobile: updateFormData.f_Mobile,
    designation: updateFormData.f_Designation,
    gender: updateFormData.f_Gender,
    courses: updateFormData.f_Course
  });
  const [image, setImage] = useState(updateFormData.f_Image);
  const [successMessage,setSuccessMessage]= useState('')


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

      await updatemp({ id: updateFormData.id,name:formData.name,designation:formData.designation,gender:formData.gender,courses:formData.courses,image:image,mobile:formData.mobile,email:formData.email}).then((res)=>res.json()).then((res)=>console.log(res))
      console.log("Form updated");
      // Handle form submission here
    setSuccessMessage('updated employee details successful!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen pb-[10%] pt-[5%] bg-blue-100">
    <div className="w-full max-w-sm p-10 bg-white rounded shadow-md shadow-slate-900">
    {successMessage && <p className="text-green-500 font-bold text-2xl" style={{fontFamily:'Caprasimo'}}>{successMessage}</p>}
      <h1 className="text-3xl font-semibold text-center">Employee Update </h1>
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
              </div> <br/>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
        >
          Update
        </button>
      </form>
    </div></div>
  );
};

export default UpadteFarm;
