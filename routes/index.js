import { Router } from 'express';
import passport from 'passport';
import { indexPage, loginPage, signupPage, dashboardPage } from '../controllers/index';
import { join } from '../controllers/join';
import { login, logout } from '../controllers/login';

const router = new Router();

router.route('/').get(indexPage);

router.route('/login').get(loginPage);

router.route('/signup').get(signupPage);

router.route('/dashboard').get(dashboardPage);

router.route('/join').post(join);

router.route('/signin').post(
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  }),
  login,
);

router.route('/logout').get(logout);

export default router;
