import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/portal", "/admin", "/login", "/auth", "/api"],
      },
    ],
    sitemap: "https://outpace-murex.vercel.app/sitemap.xml",
  };
}
