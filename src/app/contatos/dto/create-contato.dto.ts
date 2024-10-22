export class CreateContatoDto {
    name: string;
    phone: string;
    email: string;

    point: {
        type: 'Point';
        coordinates: [number, number]; // Longitude, Latitude
    };

    city: string;
    state: string;
    country: string;

    age?: number; // Campo opcional
    gender?: 'Masculino' | 'Feminino' | 'Outro'; // Campo opcional
    callCount?: number; // Campo opcional
    usageFrequency?: number; // Campo opcional
}
