import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RepGetOneOrder,
  RepoUpdateOrder,
} from "../../../../repositories/order.repo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from 'react-router';
import Moment from 'react-moment';
const AdminOrderDetails = () => {
  const [orderStatus, setOrderStatus] = useState("PENDING");
  const {
    mutate,
    isError: IsMutateError,
    error: mutateError,
    isLoading: isMutateLoading,    isSuccess
  } = RepoUpdateOrder();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  let {
    data: myOrder,
    isLoading,
    isError,
    error,
    refetch
  } = RepGetOneOrder(id);
  useEffect(() => {
    if (myOrder) {
      setOrderStatus(myOrder["status"]);
    }
  }, [ myOrder]);
  const [open, setOpen] = useState(false);
  const [openRefuse, setOpenRefuse] = useState(false);
  const handleClickOpen = (id) => {
    setOpen(true);
  };
  const handleClickOpenRefuse = (id) => {
    setOpenRefuse(true);
  };
  const handleClose = (e) => {
    if (e.target.name == "agree") {
      myOrder["status"] = "ACCEPTED";
      mutate({ id, data: myOrder });
    }
    setOpen(false);
  };
  const handleCloseRefuse = (e) => {
    if (e.target.name == "agree") {
      myOrder["status"] = "REJECTED";
      mutate({ id, data: myOrder });
      refetch();
    }
    setOpenRefuse(false);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
      renderCell: (index) => index.api.getRowIndex(index.row["_id"]) + 1,
    },
    {
      field: "itemName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { product } }) => {
        return (
          <Box display="flex">
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {product["items"][0]["name"]}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "minQuantity",
      headerName: "Quantity",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { product } }) => {
        return (
          <Box display="flex">
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {product["items"][0]["quantity"]}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "itemPrice",
      headerName: "ItemPrice",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { product } }) => {
        return (
          <Box display="flex">
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {product["items"][0]["price"]} $
            </Typography>
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
      <Dialog
        open={openRefuse}
        onClose={handleCloseRefuse}
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
            onClick={handleCloseRefuse}
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
            onClick={handleCloseRefuse}
            autoFocus
            name="agree"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Box m="20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Orders Details" subtitle="View order details" />
        </Box>

        {/* GRID & CHARTS */}
        {myOrder && (
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 2 */}
            <Box gridColumn="span 12" backgroundColor={colors.primary[400]}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
                gridColumn="span 12"
              >
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Order Detail
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                colors={colors.grey[100]}
                p="15px"
                gridColumn="span 12"
              >
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Total Price: {myOrder["price"]} $
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Date: <Moment date={myOrder["date"]} format="DD/MM/YYYY"/>
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Status: {myOrder["status"]}
                </Typography>
              </Box>
              <Box
                m="0px 0 0 0"
                height="40vh"
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
                  }
                }}
              >
                <DataGrid
                  rows={[myOrder]}
                  columns={columns}
                  getRowId={(row) => row["_id"]}
                />
              </Box>
              {orderStatus == "PENDING" && (
                <Box m="8px 0 0 0" display="flex" justifyContent="flex-end">
                  <Button
                    onClick={handleClickOpenRefuse}
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
                    Refuse
                  </Button>
                  <Button
                    onClick={handleClickOpen}
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
                    Accept
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AdminOrderDetails;
