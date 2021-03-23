import connect from '../../../middleware/mongodb'
import History from '../../../models/history.model'
import Service from '../../../models/service.model'

connect()

export default async (req, res, next) => {
    if (req.method === 'POST') {
        try {
            const { id_employee, id_service, vehicle, date } = req.body
            const newHistory = new History({ id_employee, id_service, date })

            const { price } = await Service.findOne({ _id: id_service })

            const { car, motorcycle } = price

            newHistory.value = vehicle === 'car' ? car : motorcycle

            const result = await newHistory.save()

            res.status(200).json({ result, message: 'creado con exito pah' })
        } catch (error) {
            console.log(error)
            res.status(200).json({ message: 'mama algo anda mal', error })
        }
    } else {
        next()
    }
}