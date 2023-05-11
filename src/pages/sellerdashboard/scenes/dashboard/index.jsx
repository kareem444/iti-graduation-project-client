import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { Link, useNavigate} from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { DataGrid } from "@mui/x-data-grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import { RepoGetAllMyOrders } from "./../../../../repositories/order.repo";
import { RepoGetAllMyProducts } from "../../../../repositories/product.repo";
import { useEffect, useState } from "react";
import useAuth from "../../../../custom_hooks/use_auth";
import PageRoutes from "../../../../router/page_routes";
import { RepoGetAllUsers } from "../../../../repositories/user.repo";
import Moment from "react-moment";
const SellerDashboard = () => {
  const {isAuth,fetchAuth,isAdmin,isSeller,logout}=useAuth()
  const navigate=useNavigate();
  const { data: orders, isLoading, isError, error } = RepoGetAllMyOrders();
  const { data: users, isLoading:usersLoading, isError:usersError, error:usersErrpr,refetch } = RepoGetAllUsers();
  console.log(users)
  const { data: products } = RepoGetAllMyProducts();
  const [acceptOrdersCounts,setAccceptOrdersCounts]=useState([]);
  useEffect(() => {
    // if(isAuth&&!isSeller){
    //   logout();
    //   navigate(PageRoutes.signINRoute.path)
    // }
    if(orders){
    setAccceptOrdersCounts(orders?.filter((order)=>order['status']=='ACCEPTED'))}
  }, [products,isAuth,orders]);
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
              to={`sellerorderdetails/${
                orders[index.api.getRowIndex(index.row["_id"])]["_id"]
              }`}
            >
              {index.api.getRowIndex(index.row["_id"]) + 1}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "product",
      headerName: "Product Title",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { product } }) => {
        return (
          <Box display="flex">
            <Typography color={colors.grey[100]} sx={{ ml: "0px" }}>
              {product["name"]}
            </Typography>
          </Box>
        );
      },
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
      headerName: "CreatedAt",
      flex: 1,
      renderCell: ({ row: { createdAt } }) => {
        return (
          <Box
            display="flex"
          >
            <Moment date={createdAt} format="DD/MM/YYYY"/>
          </Box>
        );
      },
      
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
                :status === "REJECTED"
                ? colors.redAccent[700]
                : status === "PAID"
                ? colors.grey[500]
                :status === "COMPLETED" ? colors.primary[500]
                : ""
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
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID & CHARTS */}
      {orders && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={orders?.length}
              subtitle="Total Orders"
              progress="0.75"
              increase="+14%"
              icon={
                <ShoppingCartIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={products?.length}
              subtitle="Total Products"
              progress="0.50"
              increase="+21%"
              icon={
                <InventoryIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={users?.length}
              subtitle="Total Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={acceptOrdersCounts.length}
              subtitle="Accepted Orders"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>

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
                Recent Orders
              </Typography>
            </Box>
            <Box
              m="0"
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
                rows={orders}
                columns={columns}
                getRowId={(row) => row["_id"]}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SellerDashboard;
