import GlobalNav from "@/components/global-nav";
import RootContainer from "@/components/root-container";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={inter.className}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
