import mongoose, { Schema } from 'mongoose';

export interface IApartment {
    unitName: string;
    unitNumber: string;
    project: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    area: number;
    description: string;
    coverImage: string;       
    images: string[];         
}

const apartmentSchema = new Schema<IApartment>({
    unitName: { type: String, required: true },
    unitNumber: { type: String, required: true, unique: true },
    project: { type: String, required: true },
    price: { type: Number, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    area: { type: Number, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: false }, 
    images: [{ type: String }]                     
});

export const Apartment = mongoose.model<IApartment>('Apartment', apartmentSchema);
