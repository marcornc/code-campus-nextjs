import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI || "";
    await mongoose.connect(mongodbUri);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;

export const fetchData = async () => {
  const data = {
    collection: 'events',
    database: 'events_db',
    dataSource: 'Cluster0',
    projection: {
      _id: 1
    }
  };

  try {
    const response = await fetch('https://eu-west-2.aws.data.mongodb-api.com/app/data-ebwcl/endpoint/data/v1/action/findOne', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': 'TKMG2gudOszxfxlgXah0BWqdnKNzI0jhLlXTlStfhtftKnszBTTVt1aKehwWHGev',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log(JSON.stringify(result));
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};



