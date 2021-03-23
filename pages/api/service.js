import connect from '../../middleware/mongodb'
import Service from '../../models/service.model'

connect()

export default async (req, res, next) => {
    const method = req.method

    switch (method) {
        case 'GET':
            try {
                const result = await Service.find({},{price: 1, name: 1})
                res.status(200).json({ result })
                break
            } catch (error) {
                res.json({ message: 'mama algo anda mal: ', error })
            }

        case 'POST':

            try {
                const newService = new Service(req.body)
                const result = await newService.save()
                res.status(200).json({ result, message: 'crado con exito pah' })
                break
            } catch (error) {
                res.json({ message: 'mama algo anda mal: ', error })
            }


        default:
            next()
    }

}