import { pgPool } from "../databases/postgresconnection.js";
export async function queryVend(res, req) {
    
    try {
        
        const query = `SELECT ven_id FROM vendedores WHERE vendedor = $1 and pass = $2`
        const values = [req.session.user, req.session.pass]
        console.log(req.session.user, req.session.pass)
        const { rows } = await pgPool.query(query, values);
        if (!rows[0]) {
            req.session.userID = -1
            return 
        }
        console.log(rows)
        req.session.userID = rows[0].ven_id   
    } catch (error) {
        console.error(error.stack);
    }
}

