"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-green-500/10 py-6 sm:py-8 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-slate-500 gap-3 sm:gap-0">
        <p className="text-center sm:text-left">© 2026 Prathamesh Inde. All rights reserved.</p>
        <p className="font-mono text-center sm:text-right">
          status: <span className="text-green-400">operational</span>
        </p>
      </div>
    </footer>
  );
}
