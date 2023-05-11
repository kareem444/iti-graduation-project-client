import { Box ,Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { RepoGetAllMyOrders } from "../../../../repositories/order.repo";

const SellerOrders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data: orders, isLoading, isError, error } = RepoGetAllMyOrders();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
      renderCell: (index) =>{ return (
        <Box
          display="flex"
        >
          <Typography color={colors.grey[100]} sx={{ ml: "0px" }}component={Link} to={`../sellerorderdetails/${orders[index.api.getRowIndex(index.row["_id"])]["_id"]}`}  >
          {index.api.getRowIndex(index.row["_id"]) + 1}
          </Typography>
        </Box>
        )
    }},
    {
      field: "product",
      headerName: "Product Title",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { product}}) => {
        // let index=0;
        // console.log("df",index)
        return (
          <Box
            display="flex"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {product['name']}
            </Typography>
          </Box>
          )

    }
  },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "createdAt",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "PENDING"
                ? colors.blueAccent[600]
                : status === "ACCEPTED"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="0 20px">
      <Header
        title="ORDERS"
        subtitle="List of Orders for Future Reference"
      />
      {orders&&
      <Box
        m="5px 0 0 0"
        height="60vh"
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
        <DataGrid
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          rows={orders}
          getRowId={(row) => row["_id"]}
        />
      </Box>
      }
    </Box>
  );
};

export default SellerOrders;
