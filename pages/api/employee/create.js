import connect from '../../../middleware/mongodb'
import Employee from '../../../models/employee.model'

connect()

export default async (req, res, next) => {
    if (req.method === 'POST') {
        try {
            const newEmployee = new Employee(req.body)
            const result = await newEmployee.save()

            res.status(200).json({ result, message: 'crado con exito pah' })
        } catch (error) {
            res.status(200).json({ message: 'ya existe pah' })
        }
    } else {
        next()
    } 
}