const { User } = require("../models");

exports.loginPage = async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userData) {
      res.render('login', {
        message: "Username doesn't exist, please try again.",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (validPassword) {
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.username = userData.username;


        res.redirect("/");
      });
    } else {
      res.render('login', {
        message: "Incorrect password, please try again.",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
