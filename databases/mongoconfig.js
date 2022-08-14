import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mondo-db-tiempos-user:Grvn1986@tiemposapp0.xcgdhtp.mongodb.net/?retryWrites=true&w=majority";
