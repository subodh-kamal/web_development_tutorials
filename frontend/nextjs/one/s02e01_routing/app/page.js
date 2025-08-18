import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to custom home</h1>
      <Link href="/about">About</Link> <Link href="/services">Services</Link>
    </>
  );
}
