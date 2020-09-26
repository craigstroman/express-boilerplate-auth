export const login = (req, res) => {
  const { user } = req;

  res.json(user);
};

export const logout = (req, res) => {
  req.session.destroy();

  res.render('logout', {
    title: req.app.locals.title,
    content: req.app.locals.description,
  });
};
