// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connect from '../../middleware/mongodb'
import Employee from '../../models/employee.model'

connect()

export default async (req, res) => {
  try {
    const result = await Employee.findOne({name: 'roberto'})
    res.status(200).json({ name: result.name })
  } catch (error) {
    console.log(error)
  }
}