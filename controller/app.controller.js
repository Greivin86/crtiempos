const loginform = (req, res) => {
    res.render('loginform', { title: 'Login Form' });;
}
const logout = (req, res) => {
    req.session.destroy();
    res.render('home', { title: 'Home' });
}

const auth = (req, res, next) => {
    if (req.session.user) {
    return next();
    }
}
const home = (req, res) => {
    res.render('home', { title: 'Home', user: req.session.user });
}


export  {
    loginform,
    logout,
    auth,
    home,
}