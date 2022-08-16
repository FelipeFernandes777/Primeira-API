import mongoose from "mongoose";
import author from "./Author.js";

const schemaBook = new mongoose.Schema(
    {
        id: { 
            type : String
        },
        title: {
            type: String,
            required: true,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: author,
        },
        editor: {
            type: String,
            required: true,
        },
        number_Pages:{
            type: Number,
        }
    }
);

const books = mongoose.model('Livros', schemaBook);

export default books;