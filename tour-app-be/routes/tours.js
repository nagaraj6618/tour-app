import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour, getImageByName, uploadTourImage } from "../controllers/tourControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import upload from '../middleware/fileUpload.js'
const router = express.Router()

router.post('/',verifyAdmin,createTour)
router.route('/upload/image').post(verifyAdmin,upload.single('file'), uploadTourImage)
router.put('/:id', verifyAdmin, updateTour)
router.delete('/:id', verifyAdmin, deleteTour)
router.get('/:id', getSingleTour)
router.get('/', getAllTour)
router.get('/tour-images/:fileName', getImageByName)
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTour)
router.get("/search/getTourCount", getTourCount)

export default router;