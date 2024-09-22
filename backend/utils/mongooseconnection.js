import mongoose from 'mongoose'

export default function mongoConn(url){
    mongoose.connect(`${url}SocialMedia`)
       .then(() => console.log('MongoDB Connected'))
       .catch(err => console.log(err));

}