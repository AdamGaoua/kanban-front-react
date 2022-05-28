const {Tag, Card} = require('../models/index');

const tagController = {
    getAllTags (req,res){
        Tag.findAll()
        .then(tag=>
            res.json(tag));

    },
    newTag(req,res){
        const {name, color} = req.body;

        Tag.create({name, color})
        .then(tag=> res.json(tag))
    },
    updateTag (req,res){
        const tagId = req.params.id;

        Tag.findByPk(tagId).then(tag=>{

            if (tag){
                const {name, color} = req.body;

                if (name){
                    tag.name = name;
                };
                if (color){
                    tag.color = color;
                }
                return tag;
            }}).then(tag=> tag.save())
            .then(tag=> 
                res.json(tag))
            .catch(error => res.status(400).json(error.toString()));
    },
    deleteTag (req,res){
        const tagId = req.params.id;
        Tag.findByPk(tagId)
        .then(tag=>{
            if (tag){
                return tag;
            }
        })
        .then(tag=>tag.destroy())
        .then(()=>
            res.json(`Le tag ${tagId} a bien été supprimée`))
        .catch(error => res.status(400).json(error.toString()));

    },

    async tagLinkCard (req,res){
        
        try {
            const cardId = req.params.id;
            const tagId= req.body.tag_id;

            let card = await Card.findByPk(cardId, {
                include:["tagsList"]
            });
            
            if (!card){
                return res.status(404).json({message:`la carte avec l'id ${cardId} n'existe pas`});
            }
            const tag = await Tag.findByPk(tagId);
            
            if (!tag){
                return res.status(404).json({message:`le tag avec l'id ${tagId} n'existe pas`});
            }
           
                await card.addTagsList(tag);
                card = await Card.findByPk(cardId,{
                    include: ["tagsList"]
                });
                
               
                res.json(card);
            
            
        } catch (error) {
            res.status(500).json(error.toString());
        }
        
    },

    async deleteTagLinkCard (req,res){
        try {
            
            const cardId = req.params.card_id;
            const tagId = req.params.tag_id;

            let card = await Card.findByPk(cardId, {
                include: ["tagsList"]
            })

            if (!card){
                return res.status(404).json({message:`la carte avec l'id ${cardId} n'existe pas`})
            }

            const tag = await Tag.findByPk(tagId);
            if (!tag){
                return res.status(404).json({message:`la tag avec l'id ${tagId} n'existe pas`})
            }

            await card.removeTagsList(tag);

            card = await Card.findByPk(cardId, {
                include: ["tagsList"]
            })

            res.json(card);

        } catch (error) {
            res.status(500).json(error.toString());
        }

        

    },
}

module.exports = tagController;