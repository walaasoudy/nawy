import express from 'express';
import { apartmentController } from '../controllers/apartmentController';

const router = express.Router();


router.get('/', apartmentController.getApartments);
router.get('/:id', apartmentController.getApartmentById);
router.post('/', apartmentController.createApartment);

export default router;