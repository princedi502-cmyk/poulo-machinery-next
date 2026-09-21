import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: 'Home', url: '/' }, ...items];
  const schemaData = getBreadcrumbSchema(allItems);

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Visual Breadcrumb Links */}
      <nav aria-label="Breadcrumb" className="py-2.5 px-4 bg-slate-100/70 border-b border-slate-200 text-xs text-slate-600">
        <div className="max-w-[1280px] mx-auto flex items-center flex-wrap gap-1.5">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight size={12} className="text-slate-400 shrink-0" />}
                {isLast ? (
                  <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-blue-700 flex items-center gap-1 transition-colors">
                    {idx === 0 && <Home size={12} />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}

