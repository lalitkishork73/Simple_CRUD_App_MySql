import express from 'express';
import { createReviews, getReviews, deleteData, updateData } from '../controllers/review.js'
const router = express.Router();

router.post('/create', createReviews)
router.get('/getdata', getReviews)
router.put('/updatedata', updateData)
router.delete('/deletedata/:id', deleteData)



export default router 