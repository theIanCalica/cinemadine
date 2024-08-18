import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline } from "@mui/material";
import SigninPage from "./pages/SigninPage";
import AdminIndexPage from "./pages/admin/AdminIndexPage";
function App() {
  return (
    <>
      <CssBaseline />
      <AdminIndexPage />
    </>
  );
}

export default App;
