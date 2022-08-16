import author from "../models/Author.js";


class authorController{ 

    static listAuthor = (req,res) => {
        author.find((err, author) => {
    
            res.status(200).json(author);
        })
    }

    static listAuthorForID = (req,res) => {
        const id = req.params.id;

        author.findById(id, (err,author) => {
            if(err){
                res.status(400).send({
                    message: `${err.message} -> ID not found`
                })
            }else{
                res.status(200).send(author);
            }
        })
    }

    static registerAuthor = (req,res) => {
        let authors = new author(req.body);

        authors.save((err) => {
            if(err){
                res.status(500).send({

                    message: `${err.message} failed to register authors.`

                })
            }else{

                res.status(201).send(authors.toJSON())
            }
        })

    }

    static updateAuthor = (req,res) => {
        const id = req.params.id;

        author.findByIdAndUpdate(id, {$set: req.body}, (err) => {
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

    static deleteAuthor = (req,res) =>{
        const id = req.params.id;

        author.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({
                    message: "Removed author sucess"
                })
            }else{
                res.status(500).send({
                    message: `${err.message} -> Failed to delete`
                })
            }
        })
    }
};

export default authorController;