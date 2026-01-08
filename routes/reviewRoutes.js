
import express from 'express';
import { createReview, getReviews } from '../controllers/reviewControllers.js';
import { notAllowed } from '../utils/notAllowed.js';
import { checkUser } from '../middlewares/checkUser.js';

const router = express.Router();

router.route('/api/reviews').post(checkUser,createReview);
router.route('/api/reviews/:id').get(getReviews).all(notAllowed);