import { Request, Response, NextFunction } from 'express';
import { Apartment, IApartment } from '../models/apartment';

const jsend = {
    success: (data: any) => ({ status: 'success', data }),
    fail: (data: any) => ({ status: 'fail', data }),
    error: (message: string) => ({ status: 'error', message }),
};

export class ApartmentController {
    // List all apartments with optional search and filter
    async getApartments(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            let response = await Apartment.find({})
            res.json(jsend.success({ response }));
        } catch (error: any) {
            console.error('Error fetching apartments:', error);
            res.status(500).json(jsend.error('Server error'));
        }
    }

    // Get apartment by ID
    async getApartmentById(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const apartment = await Apartment.findById(req.params.id);
            if (!apartment) {
                return res.status(404).json(jsend.fail({ id: 'Apartment not found' }));
            }
            res.json(jsend.success({ apartment }));
        } catch (error: any) {
            console.error('Error fetching apartment:', error);
            res.status(500).json(jsend.error('Server error'));
        }
    }
 
    // Create new apartment
    async createApartment(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { unitName, unitNumber, project, price, bedrooms, bathrooms, area, description, coverImage, images } = req.body;

            // Optional: Validate images are URLs if needed
            const newApartment: IApartment = {
                unitName,
                unitNumber,
                project,
                price,
                bedrooms,
                bathrooms,
                area,
                description,
                coverImage,
                images: images || []  
            };

            const apartment = new Apartment(newApartment);
            await apartment.save();

            res.status(201).json(jsend.success({ apartment }));
        } catch (error: any) {
            console.error('Error adding apartment:', error);
            res.status(400).json(jsend.error('Invalid data'));
        }
    }

}

export const apartmentController = new ApartmentController();