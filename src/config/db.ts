import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://Mottin:Noobert123@cluster0.xw0e7.mongodb.net/userMongo?retryWrites=true&w=majority&appName=Cluster0');
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error : any) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
