import { Schema, Document } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});