var Spell = require("../database/spells.js");

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
