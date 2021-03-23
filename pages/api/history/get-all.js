import connect from '../../../middleware/mongodb'
import History from '../../../models/history.model'

connect()

const query = [
  {
    '$sort': {
      'createdAt': -1
    }
  }, {
    '$lookup': {
      'from': 'employees', 
      'localField': 'id_employee', 
      'foreignField': '_id', 
      'as': 'employee'
    }
  }, {
    '$unwind': {
      'path': '$employee'
    }
  }, {
    '$lookup': {
      'from': 'services', 
      'localField': 'id_service', 
      'foreignField': '_id', 
      'as': 'service'
    }
  }, {
    '$unwind': {
      'path': '$service'
    }
  }, {
    '$project': {
      'employee_name': '$employee.name', 
      'service_name': '$service.name', 
      'value': '$value'
    }
  }
]

export default async (req, res, next) => {

  if (req.method === 'GET') {
    try {
      
      const result = await History.aggregate(query)
      
      res.status(200).json({ result })
    } catch (error) {
      console.log(error)
    }
  } else {
    next()
  }
}