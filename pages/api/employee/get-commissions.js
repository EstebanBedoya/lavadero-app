import connect from '../../../middleware/mongodb'
import Employee from "../../../models/employee.model";

connect()

export default async (req, res, next) => {
    const query = [
        {
          '$lookup': {
            'from': 'histories', 
            'localField': '_id', 
            'foreignField': 'id_employee', 
            'as': 'services'
          }
        }, {
          '$project': {
            'name': '$name', 
            'commissions': {
              '$multiply': [
                '$comision_value', {
                  '$size': {
                    '$filter': {
                      'input': '$services', 
                      'as': 'service', 
                      'cond': {
                        '$eq': [
                          '$$service.date', req.body.date
                        ]
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    if (req.method === 'POST') {
        try {

            const result = await Employee.aggregate(query)

            res.status(200).json({result, message: 'todo melo papi'})
            
        } catch (error) {
            console.log(error)
            res.json({error})
        }
    } else {
        next()
    }
}