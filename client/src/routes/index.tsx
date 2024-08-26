import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { routeConstant } from './constant';
import Dashboard from '../pages/dashboard';
import EmployeeForm from '../pages/employee/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeConstant.dashboard} element={<Dashboard />} />
        <Route path={routeConstant.employeeForm} element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
