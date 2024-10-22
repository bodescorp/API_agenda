import { Document } from "mongoose";

export class ContactDto extends Document {
    id: string;
    name: string;
    phone: string;
    email: string;
    
    point: {
        type: 'Point';
        coordinates: [number, number];
    };

    city: string;
    state: string;
    country: string;

    age?: number;
    gender?: 'Masculino' | 'Feminino' | 'Outro';
    callCount?: number;
    usageFrequency?: number;
}
