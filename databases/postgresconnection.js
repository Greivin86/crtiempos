import * as pg from 'pg'
import { POSTGRES_URI } from "./dbconfig.js";
const { Pool } = pg.default

export const pgpool = new Pool({
    connectionString: POSTGRES_URI
})
