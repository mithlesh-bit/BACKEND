const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).send(error);
  }
};
