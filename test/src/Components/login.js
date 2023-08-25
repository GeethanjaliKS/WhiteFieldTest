import React,{useState} from 'react'
import FileBase from 'react-file-base64';
import { adminlogin } from '../Routes/Routes';
import { useNavigate } from 'react-router-dom';


function Login({setIsLoggedIn}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault();
      const user= await adminlogin({name:name,password:password}).then((res)=>res.json()).then((res)=>{
        if(res.data.foundUser){
        
        localStorage.setItem("user",JSON.stringify(res.data.foundUser))
        localStorage.getItem("user")
        
        console.log("value",res)
        console.log("Form submitted");
      setSuccessMessage('Login successfully');
      
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/adminpage');
        setIsLoggedIn(true);
      }, 3000);}
        else{
          setErrorMessage('Incorrect username and password')
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
        }
      })
    
  
   
      
      }

  return (
    <div>
  
    <div className="flex items-center justify-center min-h-screen bg-blue-100 pb-[10%]">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md shadow-slate-900 ">
    
      {successMessage && <p className="text-green-500 font-bold text-2xl" style={{fontFamily:'Caprasimo'}}>{successMessage}</p>}
        {errorMessage && <p className="text-red-500 font-bold text-2xl" style={{fontFamily:'Caprasimo'}}>{errorMessage}</p>}
        
        <h1 className="text-3xl font-semibold text-center ">Login</h1>
        <form   className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="emailOrContact" className="block mb-1 font-medium">
              username
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter  password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none" onClick={handleSubmit}
            >
              Login
            </button>  
          
          </div>
        </form>

      </div>
      
    </div>
    
    </div>
  )
};
 

export default Login