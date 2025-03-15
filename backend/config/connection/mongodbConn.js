const mongoDb = require("mongoose");

const Connection = async () => {
  try {
    await mongoDb.connect(`${process.env.URI}`);
    console.log("connected with DB");
  } catch (error) {
    console.log("connection Error");
  }
};
Connection();
