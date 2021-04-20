import mongoose from 'mongoose';
export const setup = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/soulblog', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log('connected to database')
});
}