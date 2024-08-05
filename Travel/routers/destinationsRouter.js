//const express = require('express');
import express from 'express';
const router = express.Router()
import controller from '../controllers/DestinationController.js';


// let students = [
//     { id: 1, name: 'Elisheva', email: 'eli7@gmail.com' },
//     { id: 2, name: 'Mini', email: 'mini@gmail.com' },
//     () => { let a = 'b' }
// ];

//all server definitions will be here

router.get('/', controller.getAll);

router.get('/:id', controller.get);

router.post('/', controller.add);



// router.delete('/:id', controller.delete);

export default router;