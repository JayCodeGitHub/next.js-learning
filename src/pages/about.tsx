import Link from "next/link";

function About() {
  return (
    <>
      <h1>About</h1>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
}

export default About;
