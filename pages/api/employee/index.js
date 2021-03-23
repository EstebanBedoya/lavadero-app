import Employee from '../../../models/employee.model'
import connect from '../../../middleware/mongodb'

connect()

export default async (req, res, next) => {
    const method = req.method

    switch (method) {
        case 'GET':

            try {
                const result = await Employee.find({}, { name: 1 })
                res.status(200).json({ result })
            } catch (error) {
                console.log(error)
            }

        case 'POST':
            try {
                const newEmployee = new Employee(req.body)
                const result = await newEmployee.save()

                res.status(200).json({ result, message: 'crado con exito pah' })
            } catch (error) {
                res.status(200).json({ message: 'ya existe pah' })
            }

        case 'DELETE':
            try {
                console.log(req.query)
                const { _id } = req.query
                await Employee.findByIdAndDelete(_id)

                res.status(200).json({ message: 'Eliminado con exito pah' })

            } catch (error) {
                res.status(200).json({ message: 'malo pah' })
            }
        default:
            next()
    }
}