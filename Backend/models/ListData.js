import mongoose from "mongoose";
const ListSchema=new mongoose.Schema({
    image:{
        avif:String,
        jpg:String,
        jxl:String,
        webp:String
    },

    status_code:{
        type:String,
    },
    title:{
        type:String,
    }
});

const List=mongoose.model('List1',ListSchema);
export default List;