import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form"


const EmployeeForm = ({ onSubmit }: any) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: "column" }}>
          <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: "row" }}>
            <Stack sx={{ width: "50%" }} spacing={2}>
              <TextField {...register("f_name", { required: true })} id="firstName" label="" placeholder='First Name' name='f_name' variant="standard" />
              {errors.f_name && <Typography variant="caption" sx={{color:"red"}} display="block" gutterBottom>
                First name is required.
              </Typography>}

              <TextField {...register("l_name")} id="lastName" label="" placeholder='Last Name' name='l_name' variant="standard" />
              {errors.f_name && <Typography variant="caption" sx={{color:"red"}} display="block" gutterBottom>
                Last name is required.
              </Typography>}

              <TextField {...register("email")} id="email" label="" placeholder='email' name='email' variant="standard" />
              {errors.f_name && <Typography variant="caption"  sx={{color:"red"}} display="block" gutterBottom>
                Email is required.
              </Typography>}

              <TextField {...register("address")} id="address" multiline rows={4} label="" placeholder='address' name='address' variant="standard" />

              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                  {...register("gender")}
                  labelId="gender"
                  id="gender"
                  label="Gender"
                  placeholder='Gender'
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"male"}>Male</MenuItem>
                  <MenuItem value={"female"}>Female</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box sx={{ mt:2,display: 'flex', justifyContent: 'center', flexDirection: "row" }}>
            <Stack sx={{ width: "50%" }}>
              <Button type='submit' variant="contained">Submit</Button>
            </Stack>
          </Box>
        </Box>
      </form>
    </div>
  )
}

export default EmployeeForm