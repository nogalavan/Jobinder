import {connect} from 'mongoose';

const connectDB = async () => {
    await connect('mongodb://localhost:27017/jobinder');
    console.log('çonnected to db');
}

export default connectDB;