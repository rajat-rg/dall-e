import mongoose, { connect } from 'mongoose'

const connectDB = (url)=>{
    mongoose.set('strictQuery',true)
    mongoose.connect(url)
    .then(()=>{console.log('connected to database')})
    .catch((err)=>{
        console.log('Internal server error',err)
    })
}

export default connectDB