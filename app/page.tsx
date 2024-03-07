import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div><Link href={"/"}>HOME</Link></div>
      <div><Link href={"/blog"}>BLOG</Link></div>
      <div><Link href={"/read"}>READ</Link></div>
      <div><Link href={"/watched"}>WATCHED</Link></div>
    </main>
  );
}
