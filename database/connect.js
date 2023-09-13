import mongoose from 'mongoose'

const ConnectDB = (url) =>{

    mongoose.set('strictQuery', true)
    mongoose.connect(url)
    .then(() => console.log('the server connected successfully to database'))
    .catch((err) => {
      console.error('did not connect to database');
      console.error(err);
    });
}

export default ConnectDB