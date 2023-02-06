import Link from "next/link";

interface MainTemplateProps {
  children: React.ReactNode;
}

export default function Navbar() {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
}
