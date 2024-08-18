import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
const AdminIndexPage = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div>
      <Sidebar open={open} onClose={handleDrawerToggle} />
      <main style={{ marginLeft: open ? 240 : 0, transition: "margin 0.3s" }}>
        <div>
          <button onClick={handleDrawerToggle}>Toggle Sidebar</button>
          hi
        </div>
      </main>
    </div>
  );
};

export default AdminIndexPage;
