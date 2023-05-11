import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { RepGetOneProduct } from "../../../../repositories/product.repo";
import { Link, useParams } from "react-router-dom";
import { RepoDeleteProduct } from "../../../../repositories/product.repo";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PageRoutes from "../../../../router/page_routes";
import { useNavigate } from 'react-router';
import Moment from "react-moment";

const SellerProductDetails = () => {
  let { id } = useParams();

  const { data: product, isLoading, isError, error } = RepGetOneProduct(id);
  const {
    mutate,
    isError: IsMutateError,
    error: mutateError,
    isLoading: isMutateLoading,
    refetch,
    isSuccess
  } = RepoDeleteProduct();
  useEffect(() => {
    if(product){
      for(let i=0;i<product['notAvailableDAtes'].length;i++){
        product['notAvailableDAtes'][i] = new Date(product['notAvailableDAtes'][i])
      }
    }
  }, [id,product]);
  const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    if (e.target.name == "agree") {
      mutate(id);
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
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {index.api.getRowIndex(index.row["_id"]) + 1}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
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
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
    },
    {
      field: "minQuantity",
      headerName: "Min Quantity",
      flex: 1,
    },
    {
      field: "maxQuantity",
      headerName: "Max Quantity",
      flex: 1,
    },
  ];
  const navigate=useNavigate()
  if (isSuccess) {
  navigate("../"+PageRoutes.sellerProducts.path);
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
      <Box m="0 20px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Products Details" subtitle="View Product details" />
        </Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap="20px"
        >
          {/* ROW 2 */}
          <Box gridColumn="span 12" >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
              gridColumn="span 12"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Product Details <Link to={`/productdetails/${id}`}><VisibilityIcon/></Link>
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
                  Title: {product && product["title"]}
                </Typography>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Location: {product && product["location"]}
                </Typography>
              </Box>
              <Box>               <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                notAvailableDAtes: 
              </Typography>
            {product &&product['notAvailableDAtes'].map((myproduct)=>(
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
              <Moment date={myproduct} format="DD/MM/YYYY"/>
              </Typography>
                            ))}
            </Box>
              <Box>
                <Typography
                  color={colors.grey[100]}
                  variant="h5"
                  fontWeight="600"
                >
                  Description: {product && product["description"]}
                </Typography>
              </Box>
            </Box>
            <Box
              m="0px 0 0 0"
              height="40vh"
              sx={{
                "& .MuiDataGrid-root": {
                  bProduct: "none",
                },
                "& .MuiDataGrid-cell": {
                  bProductBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  bProductBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                  backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                  bProductTop: "none",
                  backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                  color: `${colors.greenAccent[200]} !important`,
                }

              }}
            >
              {product && (
                <DataGrid
                  rows={product["items"]}
                  columns={columns}
                  getRowId={(row) => row["_id"]}
                />
              )}
            </Box>
            {product && (
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
                  to={`../sellereditproduct/${product["_id"]}`}
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
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SellerProductDetails;
