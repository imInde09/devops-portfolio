"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-green-500/10 py-8 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-slate-500">
        <p>© 2024 Prathamesh Inde. All rights reserved.</p>
        <p className="font-mono">
          status: <span className="text-green-400">operational</span>
        </p>
      </div>
    </footer>
  );
}
