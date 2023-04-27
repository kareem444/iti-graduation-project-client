import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
const SellerProductDetails = () => {
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
    {
      field: "phone",
      headerName: "Min Quantity",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Max Quantity",
      flex: 1,
    }

  ];
  return (
    <Box m="0 20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Products Details" subtitle="View Product details" />
      </Box>
    
      {/* GRID & CHARTS */}
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
            colors={colors.grey[100]}
            p="15px"
            gridColumn="span 12"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Product Detail
            </Typography>
          </Box>
          <Box
            display="flex"
            colors={colors.grey[100]}
            p="15px"
            gridColumn="span 12"
            sx={{ flexDirection: 'column' }}
          >
            <Box display="flex" justifyContent="space-between">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Title
              </Typography>
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Location: Giza
              </Typography>
            </Box>

            <Box>
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600"
              >
                Description
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
              },
            }}
          >
            <DataGrid
              checkboxSelection
              rows={mockDataInvoices}
              columns={columns}
            />
          </Box>

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
                    bgcolor: "#ff1744",
                  },
                  margin: "0 8px",
                }}
              >
                Delete
              </Button>
              <Button
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
        </Box>
      </Box>
    </Box>
  );
};

export default SellerProductDetails;
