import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  salary: { type: Number, required: true },
  date: { type: Date, required: true ,default: Date.now},  //{ type: Number, required: true },  it was as per tutorial
  visible: { type: Boolean, default:true },
  companyId:{ type:mongoose.Schema.Types.ObjectId, ref: 'Company', required:true}
});

const Job = mongoose.model('Job',jobSchema)

export default Job
