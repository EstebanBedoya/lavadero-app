import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
    id_employee: { type: Number, ref: 'Employee' },
    id_service: { type: mongoose.Types.ObjectId, ref: 'Service' },
    date: String,
    value: Number
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.History || mongoose.model('History', historySchema)