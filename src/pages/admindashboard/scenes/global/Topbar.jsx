import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import useAuth from "../../../../custom_hooks/use_auth";
import { useNavigate } from "react-router";
import PageRoutes from "../../../../router/page_routes";
import HomeIcon from '@mui/icons-material/Home';

const AdminTopbar = () => {
  const navigate = useNavigate();
  const { authData, fetchAuth, isAuth, isAdmin, logout } = useAuth();
  useEffect(() => {
    fetchAuth()
  }, [authData, isAuth, isAdmin]);
  function handleLogOut() {
    logout();
    navigate(PageRoutes.signINRoute.path)
  }

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      {/* ICONS  */}
      <Box display="flex">
        <IconButton onClick={()=> navigate(PageRoutes.homeRoute.path)}>
          <HomeIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={handleLogOut}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default AdminTopbar;
