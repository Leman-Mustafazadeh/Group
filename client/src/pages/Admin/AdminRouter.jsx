import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/Admin/AdminHeader";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRouter;
