import mongoose from 'mongoose'

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongodburl, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        });
        console.log('conectados a la bd pah')
    } catch (error) {
        console.log('error al conectar a la base de datos: ', error)
    }

}

export default connect