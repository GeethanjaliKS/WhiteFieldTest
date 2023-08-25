import login from '../Model/LoginModel.js';

export const adminlogin =  async (req,res) => {
    // console.log(req.body)
    let {name,password} = req.body 
  try{

        let newuser = new login({
            f_username:name,
            f_Pwd:password
            
        })
     
       let foundUser = await login.findOne({$and:[{ f_username: name},{f_Pwd:password }]});
       console.log("check",foundUser)
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // used for connect front end
         res.status(201).json({
        status : 'Success',
        data : {
            foundUser
        }
    })

    }catch(err){
        console.log(err)
    }
}




