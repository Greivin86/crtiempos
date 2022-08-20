import { pgPool } from "../databases/postgresconnection.js";
import Apuesta from "../models/Apuesta.js"
import { tiq } from "../modules/createtiq.js"

const login = async (req, res) => {
    if (!req.body.user || !req.body.pass) {
        res.render('loginform', { title: 'Login Form', valid: "is-invalid" });
        return
    }
    req.session.pass = req.body.pass;
    req.session.user = req.body.user;
    try {
        //drop database for fresh start
        await Apuesta.db.dropDatabase();
        const query = `SELECT ven_id FROM vendedores WHERE vendedor = $1 and pass = $2`
        const values = [req.session.user, req.session.pass]
        
        const { rows } = await pgPool.query(query, values);
        if (!rows[0]) {
            req.session.userID = -1
            res.render('loginform', { title: 'Login Form', valid: "is-invalid" });
            return
        }
        
        req.session.venID = rows[0].ven_id
        
        res.render('home', { title: 'Home', user: req.session.user, valid: "is-valid" });
    } catch (error) {
        console.error(error.stack);
    }    
}

const procesalista = async (req, res) => {
    try {
        const apuestaLista = await Apuesta.find();
        if (!apuestaLista[0]) {
            res.render('apuestas', { user: req.session.user })
        }
        const randTiq = tiq();
        //query tiq
        const query = `INSERT INTO tiquetes (tiquete)VALUES($1) RETURNING tiq_id`;
        const values = [randTiq];
        const { rows } = await pgPool.query(query, values);
        const tiqID = rows[0].tiq_id
        const venID = req.session.venID
        apuestaLista.forEach(element => {
            const values = [element.apuestaNumero, element.apuestaMonto, element.apuestaReventado, tiqID, venID]
            const query = `INSERT INTO apuestas (numero,monto,reventado,tiquete_id,vendedor_id,fecha)VALUES($1,$2,$3,$4,$5,now())`;
            console.log(values);
            pgPool.query(query, values)
        });
            
        await Apuesta.db.dropDatabase();
        res.render('apuestas', { user: req.session.user })
        
    } catch (error) {
        console.error(error.stack);
    }
}

export {
    login,
    procesalista,
}

