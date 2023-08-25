import mongoose from "mongoose"
const loginSchema = new mongoose.Schema({

    f_username : {
        type : String,
        required : true
        
    },


    f_Pwd:{
        type: String,
        required : true
    }

})
export default mongoose.model('login',loginSchema)