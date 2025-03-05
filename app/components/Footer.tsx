import { Layout } from "antd";
import { useTranslations } from "next-intl";
import React from "react";
import dayjs from "dayjs";

const { Footer } = Layout;
const AppFooter = () => {
  const t = useTranslations("Footer");
  return <Footer>{t("copyRight", { year: dayjs().year() })}</Footer>;
};

export default AppFooter;
