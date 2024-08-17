import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { routeConstant } from './constant';
import Dashboard from '../pages/dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeConstant.dashboard} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
