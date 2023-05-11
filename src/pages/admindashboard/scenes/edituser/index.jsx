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
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {  useForm } from "react-hook-form";
import { RepoGetOneUser, RepoUpdateUser } from "../../../../repositories/user.repo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const AdminEditUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  useEffect(() => {
  }, [id]);
  let {
    data:myUser,
    isLoading,
    isError,
    error,
  } = RepoGetOneUser(id);
  const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading  ,isSuccess
 } = RepoUpdateUser()
  const [user , setUser] = useState();
  const [open, setOpen] = useState(false);
  const [updateData, setData] = useState({});

  useEffect(() => {
    if (myUser != null) {
      setUser(myUser)
    }
  }, [myUser]);
  let {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm({
    values:{ 
    name:user?.name??"",
    email:user?.email??"",
    bio:user?.bio??"",
    role:user?.role??""
    },
  });

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
      bio: {
      required: "description is required",
      minLength: {
        value: 5,
        message: "Min length 5 characters",
      },
      maxLength: {
        value: 400,
        message: "Max length 400 characters",
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
    handleClickOpen(data);
  };
  const handleClickOpen = (data) => {
    setData(data);
    setOpen(true);
  };
  const handleClose = (e) => {
    if (e.target.name == "agree") {
      mutate(updateData);
  }
  setOpen(false);
  }
    const navigate=useNavigate()
  if (isSuccess) {
    navigate(`../adminuserdetails/${id}`);
  } 
  return (
    <>
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" fontSize="30px" textAlign="center">
          {"Are you sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            fontSize="20px"
            textAlign="center"
          >
            Are you sure to update !!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            name="disagree"
            sx={{
              backgroundColor: "red",
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClose}
          >
            Disagree
          </Button>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={handleClose}
            autoFocus
            name="agree"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    <Box m="0 20px">
      <Header title="EDIT User" subtitle="Edit User Profile" />
      {user && (
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
         fullWidthf
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
       {errors?.password && <Typography>{errors.password.message}</Typography>}
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
           // onChange={handleChange}
         >
           <MenuItem value={"ADMIN"}>Admin</MenuItem>
           <MenuItem value={"CLIENT"}>Client</MenuItem>
           <MenuItem value={"SELLER"}>Seller</MenuItem>
         </Select>
       </FormControl>
       {errors?.role && <Typography>{errors.role.message}</Typography>}
       <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Bio"
              name="bio"
              sx={{ gridColumn: "span 4" }}
              multiline
              rows={3}
              {...register("bio", registerOptions.description)}
            />
            {errors?.bio && (
              <Typography sx={{ gridColumn: "span 4" }}>
                {errors.bio.message}
              </Typography>
            )}
     </Box>
     <Box display="flex" justifyContent="end" mt="20px" on>
       <Button type="submit" color="secondary" variant="contained">
         Update User
       </Button>
     </Box>
   </form>
      )}
    </Box>
    </>
  );
};

export default AdminEditUser;
