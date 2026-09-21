import React from 'react';
import { MachineSpecCategory } from '@/lib/specs';

interface SpecTableProps {
  categories: MachineSpecCategory[];
  configurationNotice?: string;
}

export default function SpecTable({ categories, configurationNotice }: SpecTableProps) {
  return (
    <div className="space-y-6">
      {configurationNotice && (
        <div className="bg-amber-50 border border-amber-200 rounded p-3 text-xs text-amber-900 leading-relaxed font-medium">
          {configurationNotice}
        </div>
      )}

      <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
        {categories.map((cat, idx) => (
          <div key={idx} className="border-b border-slate-200 last:border-b-0">
            <div className="bg-slate-100 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200">
              {cat.category}
            </div>
            <div className="divide-y divide-slate-100 bg-white">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="grid grid-cols-1 md:grid-cols-3 p-4 gap-2 text-sm hover:bg-slate-50 transition-colors">
                  <div className="font-semibold text-slate-800 text-xs md:text-sm">
                    {item.label}
                  </div>
                  <div className="md:col-span-2 text-slate-700 text-xs md:text-sm leading-relaxed">
                    {item.value}
                    {item.note && (
                      <span className="block text-xs text-slate-500 mt-1 italic">
                        *{item.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

