class NewsController {
  // [GET] / home
  index(req, res) {
    res.render("home");
  }

  // [GET] / search
  search(req, res) {
    return res.render("search");
  }
}

module.exports = new NewsController();
