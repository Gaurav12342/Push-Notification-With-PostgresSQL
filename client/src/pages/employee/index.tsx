import { Paper } from "@mui/material"
import EmployeeForm from "./Form"

const index = () => {
    const handleFormSubmit = (data:any)=>{
        console.log("handleFormSubmit",data)
    }
    return (
        <div>
            <Paper sx={{ mt: '1rem', minHeight: '80vh' }} elevation={3}>
                <EmployeeForm onSubmit={handleFormSubmit} />
            </Paper>
        </div>
    )
}

export default index