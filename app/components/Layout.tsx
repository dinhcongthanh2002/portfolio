"use client";

import { Layout } from "antd";
import AppHeader from "./Header";
import "antd/dist/reset.css";
import AppFooter from "./Footer";

const { Content } = Layout;

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout className="min-h-screen flex justify-center items-center">
      <AppHeader />
      <Content className="w-full max-w-6xl p-6">{children}</Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
