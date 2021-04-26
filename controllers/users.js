const User = require("../models/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

module.exports.get_users_one = async (req, res) => {
  const { id } = req.query;
  try {
    const user = await User.findById(id);
    if (user == null) {
      res.sendStatus(404);
      res.json({
        error: "User not exist",
      });
    } else {
      const data = { user };
      res.json(data);
    }
  } catch (error) {
    res.sendStatus(500);
    res.json({ error });
  }
};

module.exports.get_users_all = async (req, res) => {
  try {
    const users = await User.findAll();
    const data = { users };
    res.json(data);
  } catch (error) {
    res.sendStatus(500);
    res.json({ error });
  }
};

module.exports.post_users_create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  const { name, password, email } = req.body;
  try {

    const user = await User.findOne({ where: { name: name } })
    if (user != null) {
      res.statusCode = 409
      return res.json({ message: "Name " + name + " already exist"});
    }

    await User.create({
      name: name,
      password: password,
      email: email,
    })

    res.sendStatus(200)
  } catch (error) {
    res.sendStatus = 500
    res.json({ error });
  }
};

module.exports.users_login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ where: { name: name } })
    const passwordIsCorrect = await bcrypt.compare(
      password,
      user.dataValues.password
    );
    if (passwordIsCorrect)
      res.json(user);
    else
      res.json({ error: "incorrect data"});
      
  } catch (error) {
    res.sendStatus(500).json({ error });
  }
};