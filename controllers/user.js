import bcrypt from 'bcrypt';
import models from '../models/index';

const User = models.User;

export const join = async (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password, 5);

  const newUser = new User({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });

  newUser
    .save()
    .then((resp) => {
      res.send(resp);
    })
    .catch((err) => {
      res
        .status(500)
        .send({
          error: err,
        })
        .end();
    });
};

export const login = (req, res) => {
  const { user } = req;

  res.json(user);
};

export const logout = (req, res) => {
  req.logout();

  res.redirect('/logout');
};
