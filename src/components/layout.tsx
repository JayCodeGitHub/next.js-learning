import Navbar from "./navbar";
import { Roboto } from "@next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className={roboto.className}>{children}</main>
    </>
  );
}

export default Layout;
