const express = require('express');
const router = express.Router();

const npcService = require('../npc.service');
const pinService = require('../pins.service')

router.get('/npc', (req, res) => {
  npcService.getNpcs(req, res);
});

router.post('/npc', (req, res) => {
  npcService.postNpc(req, res);
});

router.put('/npc/:id', (req, res) => {
  npcService.putNpc(req, res);
});

router.delete('/npc/:id', (req, res) => {
  npcService.deleteNpc(req, res);
});


/* GET api listing. */
router.get('/pins', (req, res) => {
  pinService.getPins(req, res);
});

router.get('/boards', (req, res) => {
  pinService.getBoards(req, res);
});
module.exports = router;
