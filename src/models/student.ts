import mongoose, { Schema, Document } from "mongoose";

interface StudentDetails extends Document {
  name: String;
  place: String;
  standard: Number;
  medium: String;
}

const StudentSchema = new Schema<StudentDetails>({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  standard: {
    type: Number,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
});

export default mongoose.model<StudentDetails>("Student", StudentSchema);
