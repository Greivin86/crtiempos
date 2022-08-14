import * as pg from 'pg'
const { Pool } = pg.default

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    database:'tiempos',
    password:'1234',
    port:'5432'
})
function conectar() {
    pool.connect(function (err) {
        if (err) throw err;
        console.log("Connected to Postgres!");
    });
}

//agregar un nombre mas descriptivo
export default conectar

