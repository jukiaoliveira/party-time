const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(
            "mongodb+srv://jurafaoliveira:rr3IuG2Cemlg5iLP@cluster0.gjnqxre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("Conectado com o banco!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;