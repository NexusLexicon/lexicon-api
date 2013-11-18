exports.handler = {
  GET: function(req, res) {
    res
      .object({message: "Hello World"})
      .link("quests", req.uri.path("/quests"))
      .link("spells", req.uri.path("/spells"))
      .send();
  }
};
