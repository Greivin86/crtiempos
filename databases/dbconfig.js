import { config } from "dotenv";
config();


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mondo-db-tiempos-user:Grvn1986@tiemposapp0.xcgdhtp.mongodb.net/apuestas?retryWrites=true&w=majority";
export const POSTGRES_URI = process.env.DATABASE_URL || "postgres://postgres:1234@localhost:5432/tiempos";