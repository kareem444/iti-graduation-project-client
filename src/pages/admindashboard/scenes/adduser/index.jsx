import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import React from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useForm } from "react-hook-form";
import { RepoCreateUser } from "../../../../repositories/user.repo";
import { useNavigate } from "react-router";
import PageRoutes from "../../../../router/page_routes";


const AdminAddUser = () => {
  const theme = useTheme();

  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const {
    mutate,
    isError: IsMutateError,
    error: mutateError,
    isLoading: isMutateLoading,
    isSuccess
  } = RepoCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "Name Max length 20 characters",
      },
      pattern: {
        value: /^[a-zA-Z]+(([_\][a-zA-Z ])?[a-zA-Z]*)*$/,
        message: "Accept _ and space",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Enter Valid Email",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message: "at least one letter, one number and one special character",
      },
    },
    confirm_password: {
      required: "Confirm password is required",
      validate: (val) => {
        if (watch("password") != val) {
          return "Your passwords do no match";
        }
      },
    },
    userType: { required: "Account Type is required" },
  };

  const handleRegistration = (data) => {
    mutate(data);
  };
  const navigate=useNavigate();  
  if (isSuccess) {
    navigate("../"+PageRoutes.adminUsers.path);
  } 
  return (
    <>
      <Box m="0 20px">
        <Header title="CREATE User" subtitle="Create a New user Profile" />
        <form onSubmit={handleSubmit(handleRegistration)}>
          <Box
            display="grid"
            gap="10px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              name="name"
              // sx={{ gridColumn: "span 2" }}
              {...register("name", registerOptions.name)}
              sx={{ gridColumn: "span 4" }}
            />
            {errors?.name && <Typography>{errors.name.message}</Typography>}
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              name="email"
              // sx={{ gridColumn: "span 2" }}
              sx={{ gridColumn: "span 4" }}
              {...register("email", registerOptions.email)}
            />
            {errors?.email && <Typography>{errors.email.message}</Typography>}
            <TextField
              variant="filled"
              type="password"
              label="Password"
              name="password"
              sx={{ gridColumn: "span 4" }}
              {...register("password", registerOptions.password)}
            />
            {errors?.password && (
              <Typography>{errors.password.message}</Typography>
            )}
            <TextField
              fullWidth
              variant="filled"
              type="password"
              label="Confirm Password"
              name="rePassword"
              sx={{ gridColumn: "span 4" }}
              {...register("rePassword", registerOptions.confirm_password)}
            />
            {errors?.rePassword && (
              <Typography sx={{ gridColumn: "span 4" }}>
                {errors.rePassword.message}
              </Typography>
            )}
            <FormControl
              fullWidth
              variant="filled"
              name="role"
              sx={{ gridColumn: "span 4" }}
              {...register("role", registerOptions.userType)}
            >
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={"CLIENT"}
                label="Role"
                name="role"
              >
                <MenuItem value={"ADMIN"}>Admin</MenuItem>
                <MenuItem value={"CLIENT"}>Client</MenuItem>
                <MenuItem value={"SELLER"}>Seller</MenuItem>
              </Select>
            </FormControl>
            {errors?.role && <Typography>{errors.role.message}</Typography>}
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Add New User
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AdminAddUser;
