import mongoose from "mongoose";

mongoose.connect("mongodb+srv://l1ppins:y6eMvZP4rXtVptz5@cluster0.mv03s50.mongodb.net/Livraria-Node");

let db = mongoose.connection;

export default db;