import { config } from "dotenv";
config();


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mondo-db-tiempos-user:Grvn1986@tiemposapp0.xcgdhtp.mongodb.net/apuestas?retryWrites=true&w=majority";
