import { Schema, model } from 'mongoose';
import { MongoClient } from 'mongodb';

const uri = `mongodb+srv://animesh:2024@cluster0.rfijjbe.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndGenerate() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db();
    const collectionNames = await database.listCollections().toArray();

    for (const collection of collectionNames) {
      const collectionName = collection.name;
      const sampleDocument = await database.collection(collectionName).findOne();

      // Generate Schema based on sampleDocument
      const schemaFields = {};
      for (const key in sampleDocument) {
        schemaFields[key] = typeof sampleDocument[key];
      }
      const modelSchema = new Schema(schemaFields);

      // Create Model
      const Model = model(collectionName, modelSchema);
      console.log(modelSchema)
      console.log(`Generated Model for ${collectionName}`);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close();
  }
}

connectAndGenerate();