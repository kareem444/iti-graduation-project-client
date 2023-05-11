import { useEffect, useState } from "react";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Outlet } from "react-router-dom";
import "./index.css";
import useAuth from "../../custom_hooks/use_auth";
const AdminDashboardLayout=()=> {
  const {authData}=useAuth()
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  useEffect(()=>{
    
  },[authData])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app h-100 overflow-scroll">
          <Sidebar isSidebar={isSidebar} />
          <div className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Outlet/>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AdminDashboardLayout;
