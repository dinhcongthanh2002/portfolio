"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Spin } from "antd";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => setIsLoading(false);

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      window.addEventListener("DOMContentLoaded", handleLoaded);
      return () => window.removeEventListener("DOMContentLoaded", handleLoaded);
    }
  }, []);

  return isLoading ? (
    <div className="flex items-center justify-center h-screen">
      <Spin percent={"auto"} size="large" />
    </div>
  ) : (
    children
  );
}
