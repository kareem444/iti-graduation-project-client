import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import { RepoDeleteUser, RepoGetOneUser } from "../../../../repositories/user.repo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const AdminUserDetails = () => {
  let { id } = useParams();
  const [open, setOpen] = useState(false);
  const { data: user, isLoading, isError, error, refetch } = RepoGetOneUser(id);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleClickOpen = (id) => {
    setOpen(true);
  };
  const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading } = RepoDeleteUser();

  const handleClose = (e) => {
    if (e.target.name == "agree") {
      mutate(id)
      refetch()
    }
    setOpen(false);
  };
  return (
    <>
      {/* <ToastContainer /> */}
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
            You won't be able to revert this!!
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
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="User Details" subtitle="View User details" />
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="20px"
        >
          {/* ROW 2 */}
          <Box gridColumn="span 12" backgroundColor={colors.primary[400]}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
              gridColumn="span 12"
            >
              <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                User Details
              </Typography>
            </Box>
            <Box
              display="flex"
              colors={colors.grey[100]}
              p="15px"
              gridColumn="span 12"
              sx={{ flexDirection: "column" }}
            >
              <Box display="flex" justifyContent="space-between">
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Name: {user && user["name"]}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Email: {user && user["email"]}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Role: {user && user?.role ? user?.role : "CLIENT"}
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Bio: {user && user["bio"]}
                </Typography>
              </Box>
            </Box>


          </Box>
        </Box>
        {user &&
          <Box m="8px 0 0 0" display="flex" justifyContent="flex-end">
            <Button
              onClick={handleClickOpen}

              variant="contained"
              sx={{
                backgroundColor: "red",
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                ":hover": {
                  bgcolor: "#ff1744",
                },
                margin: "0 8px",
              }}
            >
              Delete
            </Button>
            <Button

              component={Link}
              to={`../adminedituser/${user["_id"]}`}
              sx={{
                backgroundColor: colors.greenAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                ":hover": {
                  bgcolor: colors.greenAccent[900],
                },
                margin: "0 8px",
              }}
            >
              Update
            </Button>
          </Box>
        }
      </Box>
    </>
  );
};

export default AdminUserDetails;
