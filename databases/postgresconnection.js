import * as pg from 'pg'
import { POSTGRES_URI } from "./dbconfig.js";
const { Pool } = pg.default

const pool = new Pool({
    connectionString: POSTGRES_URI
})

export const connectPostgresDB = async () => {
    try {
        await pool.connect(function (err) {

            console.log("Connected to Postgres!");
        });
    } catch (error) {
        console.error(error);
    }
};
