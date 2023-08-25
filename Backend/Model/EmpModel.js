import mongoose from "mongoose"
const empSchema = new mongoose.Schema({

    f_Name : {
        type : String,
        required : true
    },
    f_Email:{
        type : String,
      
    },
    f_Mobile:{
        type:String,
        
    },
    f_Designation:{
        type: String,
       
    },
    f_Gender:{
        type:String,
        required:true
    },
    f_Course:{
        type:[String],
        required: true
    },
    f_Image:{
        type : String,
        required : true
    },
    f_CreateDate: {
        type: Date,
        default: Date.now 
      }
})
export default mongoose.model('employeereg',empSchema)