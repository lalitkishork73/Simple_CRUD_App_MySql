import express from 'express';
import { createReviews,getReviews } from '../controllers/review.js'
const router = express.Router();

router.post('/create', createReviews)
router.get('/getdata',getReviews)


export default router 