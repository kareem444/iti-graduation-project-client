import { Box, Button,Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { useState } from "react";
const SellerOrderDetails = () => {
  const [orderStatus,setOrderStatus]=useState("pending");
  function handleOrderStatus(){
    setOrderStatus("Accepted");
  }
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,

    },
    {
      field: "date",
      headerName: "Quantity",
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Orders Details" subtitle="View order details" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        {/* ROW 2 */}
        <Box
          gridColumn="span 12"
          backgroundColor={colors.primary[400]}
        >
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
              Total Ptice: 100$
            </Typography>
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Status: {orderStatus}
            </Typography>
          </Box>
          <Box m="0px 0 0 0"
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
        }} >
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
          </Box>
          {orderStatus=="pending"&&(
          <Box m="8px 0 0 0" display="flex" justifyContent="flex-end">
          <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  ":hover": {
                    bgcolor:"#ff1744",
                  },
                  margin:"0 8px"
                }}
              >
                Refuse
              </Button>
          <Button
            onClick={handleOrderStatus}
            sx={{
              backgroundColor: colors.greenAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              ":hover": {
                bgcolor: colors.greenAccent[900],
              },
              margin:"0 8px"
            }}
          >
           Accept
          </Button>
          </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SellerOrderDetails;
