import React from "react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex flex-row">
      <aside className="bg-slate-200 p-5 mr-5">Admin SideBar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
