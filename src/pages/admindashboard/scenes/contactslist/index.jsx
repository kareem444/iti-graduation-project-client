import {  useState } from "react";
import { Box, Button,Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { RepoDeleteContact, RepoGetAllContacts } from "../../../../repositories/contact.repo";
// import "react-toastify/dist/ReactToastify.css";

const AdminContacts = () => {

  const [contactId, setcontactId] = useState("");
  const [open, setOpen] = useState(false);
  const { data: contacts, isLoading, isError, error,refetch } = RepoGetAllContacts();
  const handleClickOpen = (id) => {
    setcontactId(id)
    setOpen(true);
  };
  const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading,isSuccess } = RepoDeleteContact()
  const handleClose = (e) => {
    if(e.target.name=="agree"){
      mutate(contactId)
      refetch()
    }
    setOpen(false);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
      renderCell: (index) =>{ return (
        <Box
          display="flex"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "0px" }}component={Link} to={`../admincontactdetails/${contacts[index.api.getRowIndex(index.row["_id"])]["_id"]}`}  >
          {index.api.getRowIndex(index.row["_id"]) + 1}
          </Typography>
        </Box>
        )
    }},
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "left",
      align: "left",
      flex: 1
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "message",
      headerName: "Message",
      flex: 1,
    },
    {
      field: "",
      headerName: "Edit",
      flex: 1,
      renderCell: (index) => {
        
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="flex-start"
            borderRadius="4px"
          >
            <Box m="0 10px 0 0" onClick={()=>handleClickOpen(contacts[index.api.getRowIndex(index.row["_id"])]['_id'])}>
              <DeleteForeverIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Box m="0 0 0 10px" component={Link} to={`../admincontactdetails/${contacts[index.api.getRowIndex(index.row["_id"])]['_id']}`}>
              <VisibilityIcon
                sx={{
                  cursor: "pointer",
                  color: colors.grey[100],
                }}
              />
            </Box>
          </Box>
        );
      },
    },
  ];
  if (isSuccess) {
    refetch()
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
      <Box m="0 20px ">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Contacts" subtitle="Welcome to your Contacts" />
          {/* <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
              component={Link}
              to="../adminadduser"
            >
              <PersonAddIcon sx={{ mr: "10px" }} />
              Add User
            </Button>
          </Box> */}
        </Box>
        <Box
          m="0px 0 0 0"
          height="50vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          {contacts && (
            <DataGrid
              rows={contacts}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
              getRowId={(row) => row["_id"]}
              
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default AdminContacts;
