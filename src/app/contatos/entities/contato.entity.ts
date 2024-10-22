import { Schema, Document } from 'mongoose';

export const ContactSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  point: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number, required: false },
  gender: { type: String, enum: ['Masculino', 'Feminino', 'Outro'], required: false },
  callCount: { type: Number, required: false },
  usageFrequency: { type: Number, required: false },
}, {
  timestamps: true,
});
