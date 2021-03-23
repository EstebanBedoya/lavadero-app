import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        unique: true,
    },
    name: String,
    comision_value: {type: Number, default: 1000}
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)