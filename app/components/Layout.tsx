"use client";

import { Layout } from "antd";
import AppHeader from "./Header";
import "antd/dist/reset.css";

const { Content, Footer } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen flex justify-center items-center">
      <AppHeader />
      <Content className="w-full max-w-6xl p-6">{children}</Content>
      <Footer className="text-center">
        © {new Date().getFullYear()} Dinh Cong Thanh. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default AppLayout;
