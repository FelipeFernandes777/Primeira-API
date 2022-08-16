import books from "../models/Book.js";

class booksController{ 

    static listBooks = (req,res) => {
        books.find()
        .populate('author')
        .exec((err, books) => {
    
            res.status(200).json(books);
        })
    }

    static listBooksForID = (req,res) => {
        const id = req.params.id;

        books.findById(id)
        .populate('author', 'name')
        .exec((err,books) => {
            if(err){
                res.status(400).send({
                    message: `${err.message} -> ID not found`
                })
            }else{
                res.status(200).send(books);
            }
        })
    }

    static listBooksForEdithor = (req,res) => {
        const edithor = req.query.edithor

        books.find({'edithor': edithor}, {}, (err, books) => {
            if(!err){

                res.status(200).send(books);

            }else{
                res.status(400).send({
                    message: `${edithor} Not Found`
                })
            }
        })
    }

    static registerBook = (req,res) => {
        let book = new books(req.body);

        book.save((err) => {
            if(err){
                res.status(500).send({

                    message: `${err.message} failed to register book.`

                })
            }else{

                res.status(201).send(book.toJSON())
            }
        })

    }

    static updateBook = (req,res) => {
        const id = req.params.id;

        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200).send({
                    message: "Atualizado com Sucesso"
                });
            }else{
                res.stauts(500).send({
                    message: err.message
                });
            };
        });
    };

    static deleteBook = (req,res) =>{
        const id = req.params.id;

        books.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({
                    message: "Removed book sucess"
                })
            }else{
                res.status(500).send({
                    message: `${err.message} -> Failed to delete`
                })
            }
        })
    }

};


export default booksController;