import Link from "next/link";

export default function Header() {
  return (
    <header className="py-6">
      <nav>
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            HE Architecture
          </Link>
          <div className="space-x-6">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
