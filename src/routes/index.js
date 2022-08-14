import { Router } from 'express';
const router = Router();

import {
    home,
    loginform,
    logout,
    login,
    auth,
    apuestas,
} from '../controller/app.controller.js';
import {
    addapuesta,
    delapuesta,
    procesalista,
} from '../controller/mongodb.controller.js';

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
