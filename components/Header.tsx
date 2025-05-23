import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-20 bg-[#ccd5ae] border border-dashed">
      <h2 className="text-4xl font-semibold p-4">
        <Link href="/">CS391 URL Shortner</Link>
      </h2>
    </header>
  );
}
