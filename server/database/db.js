import mongoose from 'mongoose';
const username="kavyasitara";
const password="sitarakavya";
const Connection = async () => {
    const URI = `mongodb://${username}:${password}@ac-tzxzg08-shard-00-00.yakivdu.mongodb.net:27017,ac-tzxzg08-shard-00-01.yakivdu.mongodb.net:27017,ac-tzxzg08-shard-00-02.yakivdu.mongodb.net:27017/?ssl=true&replicaSet=atlas-9nkfph-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

    try {
        await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database ', error);
    }
};

export default Connection;
