import {  useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from 'react-router';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { RepoGetAllMyProducts } from "../../../../repositories/product.repo";
import { RepoDeleteProduct } from "../../../../repositories/product.repo";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PageRoutes from "../../../../router/page_routes";
const SellerProducts = () => {
  const [productId, setProductId] = useState("");

  const [open, setOpen] = useState(false);
  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,
  } = RepoGetAllMyProducts();
  const handleClickOpen = (id) => {
    setProductId(id);
    setOpen(true);
  };
  const {
    mutate,
    isError: IsMutateError,
    error: mutateError,
    isLoading: isMutateLoading,
    isSuccess
  } = RepoDeleteProduct();
  const handleClose = (e) => {
    if (e.target.name == "agree") {
      mutate(productId);
      refetch();
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
      renderCell: (index) => {
        return (
          <Box display="flex">
            <Typography
              color={colors.grey[100]}
              sx={{ ml: "0px" }}
              component={Link}
              to={`../sellerproductdetails/${
                products[index.api.getRowIndex(index.row["_id"])]["_id"]
              }`}
            >
              {index.api.getRowIndex(index.row["_id"]) + 1}
            </Typography>
          </Box>
        );
      },
    },
    ,
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: "Description",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
    },
    {
      field: "items",
      headerName: "Items",
      flex: 1,
      renderCell: (index) => {
        return (
          <Box display="flex" justifyContent="flex-start">
            {products && (
              <>
                {
                  products[index.api.getRowIndex(index.row["_id"])]["items"]
                    .length
                }
              </>
            )}
          </Box>
        );
      },
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
            <Box
              m="0 10px 0 0"
              onClick={() =>
                handleClickOpen(
                  products[index.api.getRowIndex(index.row["_id"])]["_id"]
                )
              }
            >
              <DeleteForeverIcon sx={{ cursor: "pointer" }} />
            </Box>
            <Box
              m="0 10px 0 10px"
              component={Link}
              to={`../sellereditproduct/${
                products[index.api.getRowIndex(index.row["_id"])]["_id"]
              }`}
            >
              <EditIcon
                sx={{
                  cursor: "pointer",
                  color: colors.grey[100],
                }}
              />
            </Box>
            <Box
              m="0 0 0 10px "
              component={Link}
              to={`../sellerproductdetails/${
                products[index.api.getRowIndex(index.row["_id"])]["_id"]
              }`}
            >
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
          <Header title="PRODUCTS" subtitle="Welcome to your Products" />
          <Box>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
              }}
              component={Link}
              to="../selleraddproduct"
            >
              <AddShoppingCartIcon sx={{ mr: "10px" }} />
              Add Product
            </Button>
          </Box>
        </Box>
        <Box
          m="0px 0 0 0"
          height="70vh"
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
            }

          }}
        >
          {products && (
            <DataGrid
              rows={products}
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

export default SellerProducts;
