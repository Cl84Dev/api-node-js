import mongoose from "mongoose";

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.venvx6i.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        console.log(
          `Ocorreu um erro ao se conectar ao banco de dados: ${error}`
        );
      } else {
        console.log("Conexão ao banco de dados realizada com sucesso");
      }
    }
  );
};

export default connectToDatabase;
