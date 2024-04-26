import { connect } from "mongoose";

type TConnectionObject = {
  isConnected?: number;
};

const connection: TConnectionObject = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    process.exit();
  }
};

export default dbConnect;
