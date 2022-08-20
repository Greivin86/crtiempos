import * as pg from 'pg'
import { POSTGRES_URI } from "./dbconfig.js";
const { Pool } = pg.default

export const pgPool = new Pool({
    connectionString: POSTGRES_URI,
})

export const connectPostgresDB = async () => {
    try {
        await pgPool.connect();
        console.log("PG is connected ");
    } catch (error) {
        console.error(error);
    }
};
