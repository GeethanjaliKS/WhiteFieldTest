import React,{useState,useEffect} from 'react'
import { deletemp, viewemp } from '../Routes/Routes';
import EmployeeForm from './EmployeeForm';
import UpadteFarm from './UpdateFarm';

function EmpTable() {
    const [emps, setEmps] = useState([]);
    const[totalCount,setTotalCount]=useState(0)
    const [updateForm,setUpdateForm]=useState(false);
    const [updateFormData,setUpdateFormData]=useState([])
    const [searchValue, setSearchValue] = useState('');
    const [filteredEmps, setFilteredEmps] = useState(emps);;
    const fetchData = async () => {
        const response = await viewemp();
        const data = await response.json();
        setEmps(data.data.emps);
        
        setTotalCount(data.data.totalEmp)
        console.log(totalCount)
      
     };
    
      useEffect(() => {
        fetchData();
      }, []);
      
      const handleUpdate=(emp)=>{
        console.log(emp)
       setUpdateFormData({id: emp._id, ...emp})
       try{
         // const response=await updatemember(id);
         // const data=await response.json();
         // console.log(data.data)
         setUpdateForm(!updateForm);
       }catch(error){
         console.log(error.message)
       }
     }

     const handleDelete = async (id) => {
        try {
     const  response= await deletemp(id);
       const data = await response.json();
       console.log(data.data)
       
     
       let filtermember= emps.filter((emp) => emp._id !==id);
          setEmps(filtermember);
          // console.log(filtermember);
          // console.log(members)
          // Handle success or show notification
        } catch (error) {
          console.log(error.message);
          // Handle error or show error notification
        }
      };
      useEffect(() => {
        if (emps && emps.length > 0) {
          const filteredEmps = emps.filter((emp) => {
            const name = emp.f_Name ? emp.f_Name.toLowerCase() : '';
            const gender = emp.f_Gender ? emp.f_Gender.toLowerCase() : '';
            const course = emp.f_Courses ? emp.f_Courses.toLowerCase() : '';
            const email = emp.f_Email ? emp.f_Email.toLowerCase() : '';
            const designation = emp.f_Designation ? emp.f_Designation.toLowerCase() : '';
            const mobile = emp.f_Mobile ? emp.f_Mobile.toLowerCase() : '';
    
            return (
              name.includes(searchValue) ||
              gender.includes(searchValue) ||
              course.includes(searchValue) ||
              email.includes(searchValue) ||
              designation.includes(searchValue) ||
              mobile.includes(searchValue)
            );
          });
    
          setFilteredEmps(filteredEmps);
        }
      }, [searchValue, emps]);
    
      const handleSearchChange = (event) => {
        setSearchValue(event.target.value.toLowerCase());
      };
    
    
      
  
    return (
<div className='bg-blue-100 pt-[6%] pb-[6%]'>
  
<p className='font-bold text-end text-lg mr-6 pb-6'>Total Employee: {totalCount}</p>
    <div className=''>
        <div className="mb-3 ml-[70%]  ">
        <input
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
        style={{ width: '300px', padding: '10px', fontSize: '16px' }}
      />
      
     </div>

      {(!updateForm )?
      <center>
       
    <table className="border-collapse border-xl border-slate-400 bg-slate-100 w-3/4">

          {/* <caption className="caption-top font-bold text-lg pt-10 font-serif">MEMBER DETAILS</caption> */}
          
          <thead className='p-6'> 
            <tr>
            <th className="border border-slate-300 ">EMP ID</th>
              <th className="border border-slate-300">NAME</th>
              <th className="border border-slate-300">MOBILE NUMBER</th>
              <th className="border border-slate-300">EMAIL_ID</th>
              <th className="border border-slate-300">DESIGNATION</th>
              <th className="border border-slate-300">GENDER</th>
              <th className="border border-slate-300">COURSE</th>
              <th className="border border-slate-300">CREATED DATE</th>
              <th className="border border-slate-300">IMAGE</th>
              <th className=" ">ACTIVITY</th>
            </tr>
          </thead>
          <tbody className=''>
            {filteredEmps.map((emp,index) => (
            
              <tr key={emp._id}>
              
                <td className="border border-slate-300" >{index}</td>
                <td className="border border-slate-300" >{emp.f_Name}</td>
                <td className="border border-slate-300" >{emp.f_Mobile}</td>
                <td className="border border-slate-300" >{emp.f_Email}</td>
                <td className="border border-slate-300">{emp.f_Designation}</td>
                <td className="border border-slate-300">{emp.f_Course}</td>
                <td className="border border-slate-300">{emp.f_Gender}</td>
              <td className="border border-slate-300">{emp.f_CreateDate}</td>  
                <td className="border border-slate-300 ">
                  <img src={emp.f_Image} alt='' className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
                
                 <td className="border border-slate-300" ><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(emp._id)}>Delete</button> 
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(emp) }>Upadte</button>
                </td>





</tr>
))}
          </tbody>
        </table>
        </center>
       
               :
               <UpadteFarm updateFormData={updateFormData} updateForm={updateForm}/> 
            }
          
        </div>
        </div>
      
    
  )
}

export default EmpTable