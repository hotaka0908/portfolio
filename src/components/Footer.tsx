export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Hotaka Funahashi. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
