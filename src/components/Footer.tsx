export default function Footer() {
  return (
    <footer className="py-6 mt-auto">
      <div className="flex justify-between items-center">
        <p>© 2024 Your Name</p>
        <div className="space-x-6">
          <a href="mailto:your@email.com">Email</a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
