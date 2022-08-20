import { Router } from 'express';
const router = Router();

import {
    home,
    loginform,
    logout,
    auth,
} from '../controller/app.controller.js';
import {
    apuestas,
    addapuesta,
    delapuesta,
} from '../controller/mongodb.controller.js';

import {
    login,
    procesalista
} from '../controller/postgresdb.controller.js';


//routes
router.get('/', home)

router.get('/loginform', loginform)

router.get('/logout', logout)

router.post('/login', login)

router.post('/addapuesta' , addapuesta)

router.get('/delapuesta/:_id' , delapuesta)

router.post('/procesalista',procesalista)

router.get('/apuestas', auth, apuestas)

export default router;
