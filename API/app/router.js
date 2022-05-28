const express = require('express');

const router = express.Router();

const listController = require('./controllers/listController');
const cardController = require('./controllers/cardController');
const tagController = require('./controllers/tagController');

router.get('/', (request, response) => {
    response.send('Ping');
});

// List

router.get('/lists', listController.getAllLists);
router.post('/lists', listController.createList);

router.get('/lists/:id', listController.getOneList);
router.patch('/lists/:id', listController.modifyList);
router.delete('/lists/:id', listController.deleteList);



// Card
router.get('/lists/:id/cards', cardController.getCardsByList);
router.get('/cards/:id', cardController.getOneCard);
router.post('/cards', cardController.createCard);
router.patch('/cards/:id',cardController.updateCard);
router.delete('/cards/:id', cardController.deleteCard);

//Tag
router.get('/tags', tagController.getAllTags);
router.post('/tags', tagController.newTag);
router.patch('/tags/:id', tagController.updateTag);
router.delete('/tags/:id', tagController.deleteTag);
router.post('/cards/:id/tag',tagController.tagLinkCard);
router.delete('/cards/:card_id/tag/:tag_id',tagController.deleteTagLinkCard);

module.exports = router;
