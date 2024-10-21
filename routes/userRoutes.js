const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup); // not a rest follower
router.post('/login', authController.login); // not a rest follower
router.get('/logout', authController.logout); // not a rest follower

router.post('/forgotPassword', authController.forgotPassword); // not a rest follower
router.patch('/resetPassword/:token', authController.resetPassword); // not a rest follower

router.use(authController.protect); //protect all routes

router.patch('/updateMyPassword', authController.updatePassword); // not a rest follower

router.get('/me', userController.getMe, userController.getUser); // not a rest follower

router.patch('/updateMe', userController.updateMe); // not a rest follower
router.delete('/deleteMe', userController.deleteMe); // not a rest follower

router.use(authController.restrictTo('admin'));
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
