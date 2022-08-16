import mongoose from "mongoose";

const schemaAuthor = new mongoose.Schema(
    {
        id: 
        {
            type: String,
        },
        name: 
        {
            type: String,
            required: true,
        },
        nationality:
        {
            type: String,
        }
    },
    {
        versionKey: false
    }
)

const author = mongoose.model("author", schemaAuthor);

export default author;