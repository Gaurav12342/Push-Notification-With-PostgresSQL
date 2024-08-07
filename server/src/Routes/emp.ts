import express from 'express';
import { getAllEmployee } from '../controller/emp';

const route = express.Router();

route.get('/emp', getAllEmployee);

export default route;
