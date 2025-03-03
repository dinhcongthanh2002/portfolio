import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Select, Space } from "antd";
import { startTransition } from "react";
import { Locale } from "antd/es/locale";
import Image from "next/image";

const AppHeader: React.FC = () => {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const t = useTranslations("Header"); // Lấy dữ liệu từ file messages
  const locale = useLocale();
  const router = useRouter();

  return (
    <header className="font-semibold text-[rgba(18,18,18,0.85)] h-[70px] bg-white shadow-md w-full">
      {/* <div style={{ width: "100%", maxWidth: 1200, padding: 24 }}></div> */}
      <div className="flex justify-between items-center max-w-6xl h-full mx-auto">
        <div className="logo">
          <Link href="/" className="font-semibold uppercase">
            {t("navbar.logoTitle")}
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">{t("navbar.myCv")}</Link>
            </li>
            <li>
              <Link href="/products">{t("navbar.portfolio")}</Link>
            </li>
            <li>
              <Link href="/news">{t("navbar.news")}</Link>
            </li>
            <li>
              <Link href="/contact">{t("navbar.contact")}</Link>
            </li>
            <li>
              <Select
                className="w-32"
                variant="borderless"
                options={[
                  {
                    label: "Tiếng Việt",
                    value: "vi",
                    flag: "/images/flags/vietnam.svg",
                  },
                  {
                    label: "English",
                    value: "en",
                    flag: "/images/flags/uk.svg",
                  },
                  {
                    label: "日本語",
                    value: "ja",
                    flag: "/images/flags/japan.svg",
                  },
                ]}
                optionRender={(option) => (
                  <Space>
                    <Image
                      src={option.data.flag}
                      width={24}
                      height={24}
                      alt={option.data.label}
                    />
                    <span>{option.data.label}</span>
                  </Space>
                )}
                defaultValue={locale}
                onChange={(value: string) => {
                  localStorage.setItem("language", value); // Lưu vào localStorage
                  router.push(`/${value}`); // Chuyển hướng URL
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
