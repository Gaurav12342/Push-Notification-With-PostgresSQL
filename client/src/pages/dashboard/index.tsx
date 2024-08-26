import {
  Button,
  Stack,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Pagination,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { routeConstant } from '../../routes/constant';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [empList, setEmpList] = useState([]);
  const handleAddEmp = () => {
    navigate(routeConstant.employeeForm);
  }

  const fetchEmployees = async () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const getFcmToken = localStorage.getItem("FCM_token");
    try {
      const response: any = await axios.get(`${baseUrl}company/get-all-emp`, {
        headers: {
          Authorization: "",
          FCM_Token: getFcmToken
        }
      });
      if (response?.data?.data) {
        setEmpList(response?.data?.data);
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <Paper sx={{ mt: '1rem', minHeight: '80vh' }} elevation={3}>
        <Stack
          sx={{ padding: '1rem' }}
          direction="row"
          spacing={2}
          justifyContent={'space-between'}
        >
          <Typography variant="h5" gutterBottom>
            Employee List
          </Typography>
          <Button variant="contained" onClick={handleAddEmp}>Add Employee</Button>
        </Stack>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Gender</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {empList.map((row:any) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left"> {row.f_name}</TableCell>
                  <TableCell align="left">{row.l_name}</TableCell>
                  <TableCell align="left">{row.address}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.gender}</TableCell>
                  <TableCell align="center">
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>{' '}
                    &nbsp;
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <Stack sx={{ padding: '1rem', width: '100%' }} spacing={1}>
                <Pagination count={10} variant="outlined" color="primary" />
              </Stack>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
