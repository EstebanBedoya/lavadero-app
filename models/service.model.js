import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    price: {
        car: Number,
        motorcycle: Number
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Service || mongoose.model('Service', serviceSchema)