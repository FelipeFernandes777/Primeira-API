import mongoose from "mongoose";

const schemaEdithor = new mongoose.Schema({
        id: {
            type: String,
        },
        name: {
            type : String,
            required : true
        },
        age: {
            type: Number,
            required: true
        }
    },
    {
        versionKey: false
    }
)


const edithorSchema = mongoose.model('editor', schemaEdithor);


export default edithorSchema;