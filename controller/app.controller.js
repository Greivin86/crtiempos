import Apuesta from '../models/Apuesta.js'
import { pgpool } from '../databases/postgresconnection.js'

const loginform = (req, res) => {
    res.render('loginform', { title: 'Login Form' });;
}
const logout = (req, res) => {
    req.session.destroy();
    res.render('home', { title: 'Home' });
}
const login = async(req, res) => {
    if (req.body.user && req.body.pass) {
        req.session.user = req.body.user;
        req.session.password = req.body.pass;
        const query = `SELECT * 
                   FROM vendedores
                   WHERE vendedor = 'Admin' and password = 4dm1n`;
        try {
            pgpool.connect();
            const { rows } = await pgpool.query(query); // sends queries
            console.log(rows)
            /*if (rows.lenght == 0) {
                res.render('loginform', { title: 'Login Form' });
            } else { res.render('home', { title: 'Home', user: req.session.user }); }*/
        } catch (error) {
            console.error(error.stack);
        }finally {
            await pgpool.end(); // closes connection
        }
        await Apuesta.db.dropDatabase();
        res.render('home', { title: 'Home', user: req.session.user });
    }else  {
        res.render('loginform', { title: 'Login Form'});
    }
}
const auth = (req, res, next) => {
    if (req.session.user) {
    return next();
    }
}
const home = (req, res) => {
    res.render('home', { title: 'Home', user: req.session.user });
}
const apuestas = async (req, res) => {
    const apuestaLista = await Apuesta.find();
    res.render('apuestas', { title: 'Apuestas', user: req.session.user, apuestaLista});
    
}

export  {
    loginform,
    logout,
    login,
    auth,
    apuestas,
    home,
}