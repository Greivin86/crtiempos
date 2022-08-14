const loginform = (req, res) => {
    res.render('loginform', { title: 'Login Form', user: req.session.user });;
}
const logout = (req, res) => {
    req.session.destroy();
    res.render('home', { title: 'Home' });
}
const login = async(req, res) => {
    if (req.body.user && req.body.pass) {
        req.session.user = req.body.user;
        await Apuesta.db.dropDatabase();
        res.render('home', { title: 'Home', user: req.session.user });
    }else  {
        res.send('Error');
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