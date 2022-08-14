import Apuesta from '../models/Apuesta.js'

const addapuesta = async (req, res) => {
    if (req.body.apuestaNumero && req.body.apuestaMonto && req.body.apuestaReventado) {
        const { apuestaNumero, apuestaMonto, apuestaReventado } = req.body;
        const NewApuesta = new Apuesta({ apuestaNumero, apuestaMonto, apuestaReventado });
        await NewApuesta.save();
        const apuestaLista = await Apuesta.find();
        res.render('apuestas', { user: req.session.user, apuestaLista })
    } else {
        res.send('Error');
    }
};
const procesalista = async (req, res) => {
    //aqui se meten los datos a SQL
    await Apuesta.db.dropDatabase();
    res.render('apuestas', { user: req.session.user })
}


const delapuesta = async (req, res) => {
    const dato = await Apuesta.findByIdAndDelete(req.params._id)
    console.log(dato)
    const apuestaLista = await Apuesta.find();
    console.log(apuestaLista)
    res.render('apuestas', { title: 'Apuestas', user: req.session.user, apuestaLista });
}

export {
    addapuesta,
    delapuesta,
    procesalista,
}