import connect from '../../../middleware/mongodb'
import Employee from '../../../models/employee.model'

connect()

export default async (req, res, next) => {
  if (req.method === 'GET') {
    try {
      const result = await Employee.find({}, { name: 1 })
      res.status(200).json({ result })
    } catch (error) {
      console.log(error)
    }
  } else {
    next()
  }
}