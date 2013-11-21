var mongoose = require('mongoose');

var spellSchema = new mongoose.Schema({
  spell_name: String,
  level_requirement: Number,
  short_description: String,
  long_description: String,
  mana_cost: Number,
  spell_type: [String],
  path: [String],
  aethers: Number,
  duration: Number,
  target: String
});

spellSchema.path('spell_name').required(true);
spellSchema.path('level_requirement').required(true);

spellSchema.path('spell_name').index({ unique:true });


module.exports = mongoose.model('Spell', spellSchema);
