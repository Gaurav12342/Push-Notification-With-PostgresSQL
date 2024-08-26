import { Paper } from "@mui/material"
import EmployeeForm from "./Form"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { routeConstant } from "../../routes/constant";
import { useState } from "react";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const index = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleFormSubmit = async (data: any) => {
        const baseUrl = import.meta.env.VITE_BASE_URL;
        const getFcmToken = localStorage.getItem("FCM_token");
        try {
            const response: any = await axios.post(`${baseUrl}company/add-emp`, data, {
                headers: {
                    Authorization: "",
                    FCM_Token: getFcmToken
                }
            });
            if (response.data.status === 201) {
                setOpen(true);
                navigate(routeConstant.dashboard);
            }
        } catch (error) {
            console.log("Error", error)
        }
    }

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Paper sx={{ mt: '1rem', minHeight: '80vh' }} elevation={3}>
                <EmployeeForm onSubmit={(data: any) => {
                    setTimeout(() => {
                        handleFormSubmit(data);
                    }, 500);
                }} />
            </Paper>

            <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Record added successfully.
                </Alert>
            </Snackbar>
        </div>
    )
}

export default index