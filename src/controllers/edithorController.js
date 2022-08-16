import edithorSchema from "../models/Edithor.js";

class edithorController{ 

    static listEdithor = (req,res) => {
        edithorSchema.find((err, edithorSchema) => {
            if(!err){

                res.status(200).json(edithorSchema);

           }else{
                res.status(500).send({
                    message: `Error 500`
                })

           }
        })
    }

    static listEdithorForID= (req,res) => {
        const id = req.params.id;

        edithorSchema.findById(id, (err,edithorSchema) => {
            if(!err){
                
                res.status(200).send(edithorSchema);
               
            }else{

                    res.status(400).send({
                    message: `${err.message} -> ID not found`
                })

            }
        })
    }

    static registerEdithor = (req,res) => {
        let book = new edithorSchema(req.body);

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

    static updateEdithor = (req,res) => {
        const id = req.params.id;

        edithorSchema.findByIdAndUpdate(id, {$set: req.body}, (err) => {
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

    static deleteEdithor = (req,res) =>{
        const id = req.params.id;

        edithorSchema.findByIdAndDelete(id, (err) => {
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


export default edithorController;