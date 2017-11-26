const Npc = require('./Npc.model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function getNpcs(req, res) {
  const docquery = Npc.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(npcs => {
      res.status(200).json(npcs);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

function postNpc(req, res) {
  const originalNpc = { 
    _id: req.body._id,
    name: req.body.name,
    tags: req.body.tags,
    appearance: req.body.appearance,
    portrayal: req.body.portrayal,
    hook: req.body.hook,
    image_url: req.body.image_url,
    campaign: req.body.campaign,
    pinterest_id: req.body.pinterest_id
  };
  const npc = new Npc(originalNpc);
  npc.save(error => {
    if (checkServerError(res, error)) return;
    res.status(201).json(npc);
    console.log('Npc created successfully!');
  });
}

function putNpc(req, res) {
  const originalNpc = {
    _id: req.params._id,
    name: req.body.name,
    tags: req.body.tags,
    appearance: req.body.appearance,
    portrayal: req.body.portrayal,
    hook: req.body.hook,
    image_url: req.body.image_url,
    campaign: req.body.campaign,
    pinterest_id: req.body.pinterest_id,
  };
  Npc.findOne({ _id: originalNpc._id }, (error, npc) => {
    if (checkServerError(res, error)) return;
    if (!checkFound(res, npc)) return;

    npc.name = originalNpc.name;
    name = originalNpc.name;
    tags = originalNpc.tags;
    appearance = originalNpc.appearance;
    portrayal = originalNpc.portrayal;
    hook = originalNpc.hook;
    image_url = originalNpc.image_url;
    campaign = originalNpc.campaign;
    pinterest_id = originalNpc.pinterest_id;
    
    npc.save(error => {
      if (checkServerError(res, error)) return;
      res.status(200).json(npc);
      console.log('Npc updated successfully!');
    });
  });
}

function deleteNpc(req, res) {
  const _id = req.params._id;
  Npc.findOneAndRemove({ _id: _id })
    .then(npc => {
      if (!checkFound(res, npc)) return;
      res.status(200).json(npc);
      console.log('Npc deleted successfully!');
    })
    .catch(error => {
      if (checkServerError(res, error)) return;
    });
}

function checkServerError(res, error) {
  if (error) {
    res.status(500).send(error);
    return error;
  }
}

function checkFound(res, npc) {
  if (!npc) {
    res.status(404).send('Npc not found.');
    return;
  }
  return Npc;
}

module.exports = {
  getNpcs,
  postNpc,
  putNpc,
  deleteNpc
};