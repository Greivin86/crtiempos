const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "tiempos",
    password: "1234",
    port: "5432"
});

async function crearVendedor(nombre) {
    await pool.query(`INSERT INTO vendedores("vendedor")VALUES($1)`, [nombre]);
}

crearVendedor("Greivin A A")
