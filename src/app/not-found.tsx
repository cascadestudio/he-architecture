import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">404</h1>
      <h2 className="text-2xl mb-8">Page non trouvée</h2>
      <p className="mb-10">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#755C49] text-white hover:bg-[#64503F] transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
