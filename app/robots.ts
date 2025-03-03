import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", // Tất cả các bot
      allow: "/", // cho phép bot truy cập vào trang chủ
      disallow: "/private/", // không cho bot truy cập vào thư mục private
    },
    sitemap: `${process.env.NEXT_PUBLIC_WEB_URL}/sitemap.xml`,
  };
}
