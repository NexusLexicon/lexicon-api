var Spell = require("../database/spells.js");

//Spell JSON

/*

{
  "spell_name": "Mend",
  "level_requirement": 1,
  "short_description": "small 50 vita heal",
  "long_description": "Heals a small amount (50) of vita.",
  "mana_cost": 20,
  "aethers": 0,
  "duration": 0,
  "target": "self",
  "_id": "528d6161857c61d25b000002",
  "__v": 0,
  "path": [
      "warrior",
      "mage",
      "rogue",
      "poet"
  ],
  "spell_type": [
      "Healing"
  ]
}

*/


exports.handler = {
  GET : function(req, res) {
    var query = "";

    if (typeof req.uri.query().path !== "undefined") {
      query = { path: req.uri.query().path };
    }

    Spell.find(query).exec(function(err, spells) {
      if (err) return res.status.notFound();
      res.collection(spells).send();
    });
  },
  POST : function(req, res) {
    req.onJson(function(err, obj) {
      var spell = new Spell(obj);
      spell.save(function (err) {
        if (err) return res.status.notAcceptable(err);
        res.status.created(req.uri);
      });
    });
  }
};
