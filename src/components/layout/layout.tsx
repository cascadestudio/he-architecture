"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith("/studio");

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-5 pt-[120px] lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-3">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
