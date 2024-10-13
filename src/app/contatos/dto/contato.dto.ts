import { Document } from "mongoose";

export class ContactDto extends Document {
    id: string;
    name: string;
    phone: string;
    email: string;
}