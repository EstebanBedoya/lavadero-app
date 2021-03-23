import connect from '../../../middleware/mongodb'
import Employee from '../../../models/employee.model'

connect()

export default async (req, res, next) => {
    if (req.method === 'DELETE') {
        try {
            console.log(req.query)
            const { _id } = req.query
            await Employee.findByIdAndDelete(_id)

            res.status(200).json({ message: 'Eliminado con exito pah' })

        } catch (error) {
            res.status(200).json({ message: 'malo pah' })
        }
    } else {
        next()
    }
}