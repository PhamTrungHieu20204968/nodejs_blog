const Course = require("../models/Course");

class NewsController {
  // [GET] / home
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses);
      })
      .catch((err) => {
        res.status(400).json({ error: "ERROR..!!!" });
      });

    // res.render("home");
  }

  // [GET] / search
  search(req, res) {
    return res.render("search");
  }
}

module.exports = new NewsController();
