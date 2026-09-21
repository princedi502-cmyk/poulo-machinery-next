import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="bg-white border border-slate-200 rounded-lg p-8 sm:p-12 text-center max-w-lg mx-auto shadow-sm space-y-6">
        <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-full flex items-center justify-center mx-auto">
          <Search size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">404 Error</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The requested page or weaving machine specification URL does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center text-xs font-semibold">
          <Link
            href="/"
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded transition-colors flex items-center justify-center gap-2"
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/contact/"
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

