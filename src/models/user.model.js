
import mongoose ,{Schema} from "mongoose";
import bcrypt from "bcrypt"
import { Jwt } from "jsonwebtoken";

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudnary url
        required:true
    },
    coverImage:{
        type:String,//cloudnary image
    },
    WatchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

UserSchema.pre("save",async function(next){ 
    if(!this.isModified("password")){
     return next()
    } else {                                  //pre is a hook which checks just before user submits the data
  this.password=bcrypt.hash(this.password,10)
  next()
    }
})    

UserSchema.methods.isPasswordCorrect=  async function(){
   return await bcrypt.compare(password,this.password)
}

export const User=mongoose.model("User",UserSchema)