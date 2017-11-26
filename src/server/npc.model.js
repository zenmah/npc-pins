const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const npcSchema = new Schema(
  {
    _id: { type: String, required: true, unique: true },
    name: String,
    tags: [String],
    appearance: String,
    portrayal: String,
    hook: String,
    image_url:String,
    campaign:String,
    pinterest_id:String
  },
  {
    collection: 'npcs',
    read: 'nearest'
  }
);

const Npc = mongoose.model('Npc', npcSchema);

module.exports = Npc;