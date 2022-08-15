import { config } from "dotenv";
config();


export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://mondo-db-tiempos-user:Grvn1986@tiemposapp0.xcgdhtp.mongodb.net/apuestas?retryWrites=true&w=majority";
export const POSTGRES_URI = process.env.DATABASE_URL || "postgres://bwzyatajfrdpkz:6c679fd4809c497c9bf1fd7257d8efd48dd88bdad21ab0c8a63d0a7c7ff7f492@ec2-54-147-33-38.compute-1.amazonaws.com:5432/d7j7i9opmid9m7";