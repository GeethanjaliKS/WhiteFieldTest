import employeereg from '../Model/EmpModel.js';

export const empreg = async (req, res) => {
    const { name, mobile, designation, courses, image, gender, email } = req.body;
  
    try {
      
      const foundEmail = await employeereg.findOne({ f_Email: email });
  
      if (foundEmail) {
        console.log("Data already exists");
        return res.status(409).json({ message: 'Data already exists' });
      } else {
        let newuser = new employeereg({
          f_Name: name,
          f_Email: email,
          f_Mobile: mobile,
          f_Designation: designation,
          f_Gender: gender,
          f_Course: courses,
          f_Image: image,
        });
  
        let createdUser = await newuser.save();
        
        res.status(201).json({
          status: 'Success',
          data: {
            createdUser,
          },
        });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  };
  


export const viewemp= async (req, res) => {
    try {
      const emps = await employeereg .find();
    //   const totalWorker= await worker.count();
    //   console.log(totalWorker);
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
            emps 
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };


  export const updatemp= async (req, res) => {
    try {
      // const {id} = req.params;
      // console.log(id)
      const {id,name,mobile,designation,courses,image,gender,email } = req.body;
      console.log('testbody',req.body)
    
  
      // Perform the update operation using the ID and updated data
      const update = await employeereg.findByIdAndUpdate(
        id,
        {  
             f_Name:name,
            f_Email:email,
            f_Mobile:mobile,
            f_Designation:designation,
            f_Gender:gender,
            f_Course:courses,
            f_Image:image },{new:true}
      );
     console.log(update)
      res.json({ data: update });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }}

    export const deletemp=async (req,res) => {
        try {
          const {id}= req.params
        console.log(id)
       const dat= await employeereg.findByIdAndRemove(id)
       console.log(dat)
        res.json({data:'Deleted'})
        } catch (err) {
          res.status(500).json({
            status: 'error',
            message: err.message,
            
          });
          console.log(err.message)
        }
        
      }