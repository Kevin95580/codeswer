import mongoose from "mongoose";

import handler from "@/pages/api/hello";

// const mongoose = require('mongoose');

const connectdb = (handler:any)=>async (req:any,res:any)=>{
    if(mongoose.connections[0].readyState)
    {
            return handler(req,res);
    }
    
    await mongoose.connect('mongodb://localhost:27017/codeswear1');
    return handler(req,res);
}

export default connectdb;