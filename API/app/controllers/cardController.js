const {Card} = require('../models/index');

const cardController = {
    getCardsByList (req,res){
        

        Card.findAll( {
            include:["tagsList"]
        })
        .then(card => 
            res.json(card));
    },

    getOneCard (req,res){
        const cardId = req.params.id;

        Card.findByPk(cardId, {
        include:["tagsList"]
        }).then(card=>
            res.json(card));
    },

    createCard (req,res){
        const {description, position, list_id} = req.body;

        Card.create({description, position, list_id}).then(card=> 
            res.json(card));
    },

    updateCard (req,res){
        const cardId = req.params.id;

        Card.findByPk(cardId).then(card=>{

        

        if(card){
            const { description,position,list_id} = req.body;

            if (description){
                card.description = description;
            };
            if (position){
                card.position = position;
            };
            if (list_id){
                card.list_id = list_id;
            };
            return card;
        }}).then(card=> card.save())
        .then(card=>
            res.json(card))
        .catch(error => res.status(400).json(error.toString()));
        },

    deleteCard (req,res){
        const cardId = req.params.id;

        Card.findByPk(cardId)
            .then(card=>{

                if (card){
                    return card;
                }
            })
            .then(card=>card.destroy())
            .then(()=> 
                res.json(`La carte ${cardId} a bien été supprimée`))
            .catch(error => res.status(400).json(error.toString()));

    },


    }






module.exports = cardController;