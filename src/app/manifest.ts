import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Delwin Dcruz | Full Stack Developer",
    short_name: "Delwin Dcruz",
    description: "Portfolio of Delwin Dcruz, a Full Stack Developer specializing in Java, Spring Boot, React and Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffef2",
    theme_color: "#fffef2",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
