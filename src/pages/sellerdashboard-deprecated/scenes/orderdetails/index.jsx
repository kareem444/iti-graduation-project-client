import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepGetOneOrder, RepoUpdateOrder } from "../../../../repositories/order.repo";
const SellerOrderDetails = () => {
  const [orderStatus, setOrderStatus] = useState("PENDING");
  const { mutate, isError: IsMutateError, error: mutateError, isLoading: isMutateLoading } = RepoUpdateOrder()

  function handleAcceptOrder() {
    myOrder['status']="ACCEPTED";
    mutate(id,myOrder)
  }
  function handleRefuseOrder() {
    myOrder['status']="REJECTED";
    mutate(id,myOrder)
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let { id } = useParams();
  let {
    data: myOrder,
    isLoading,
    isError,
    error,
    isSuccess,
  } = RepGetOneOrder(id);
  // console.log(myOrder)
  useEffect(()=>
  {
    if(myOrder){
    setOrderStatus(myOrder['status']);}
  },[myOrder])
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
      renderCell: (index) => index.api.getRowIndex(index.row["_id"]) + 1,
    },
    {
      field: "product",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { items}}) => {
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {items['name']}
            </Typography>
          </Box>
          )

    }
  },
    {
      field: "product2",
      headerName: "Quantity",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: {items}}) => {
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {items['quantity']}
            </Typography>
          </Box>
          )

    }
  },
    {
      field: "product3",
      headerName: "MinQuantity",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { items}}) => {
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {items['minQuantity']}
            </Typography>
          </Box>
          )

    }
  },
    {
      field: "product4",
      headerName: "MaxQuantity",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: {items}}) => {
        // let index=0;
        // console.log("df",index)
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {items['maxQuantity']}
            </Typography>
          </Box>
          )

    }
  },
    {
      field: "product5",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { items}}) => {
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {items['price']}
            </Typography>
          </Box>
          )

    }
  },
  ];
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Orders Details" subtitle="View order details" />
      </Box>
      
      {/* GRID & CHARTS */}
      {myOrder&&
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
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
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
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Total Ptice: {myOrder['price']}
            </Typography>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
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
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={myOrder['product']}
              columns={columns}
              getRowId={(row) => row["_id"]}
            />
          </Box>
          {orderStatus == "PENDING" && (
            <Box m="8px 0 0 0" display="flex" justifyContent="flex-end">
              <Button onClick={handleRefuseOrder}
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
                onClick={handleAcceptOrder}
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
}
    </Box>
  );
};

export default SellerOrderDetails;
