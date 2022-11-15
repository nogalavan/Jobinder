import { Schema, model, Document, ObjectId } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName: string;
    yearsOfExperience: number;
    cv: string;
    dischargeDate: Date; 
    email: string;
    rolesInCharge: [ObjectId]
    avatarImage?: string;
  }

  const userSchema = new Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    avatarImage: String,
    cv: String,
    yearsOfExperience: Number,
  });
  
  const User = model<IUser>('User', userSchema);

  export default User;