import express from 'express';
import {
  addEmployee,
  deleteEmployee,
  getAllEmployee,
  getByIdEmployee,
  updateEmployee,
} from '../controller/emp';

const route = express.Router();

route.get('/get-all-emp', getAllEmployee);
route.get('/get-all-emp/:id', getByIdEmployee);
route.post('/add-emp', addEmployee);
route.put('/update-emp/:id', updateEmployee);
route.delete('/delete-emp/:id', deleteEmployee);

export default route;
