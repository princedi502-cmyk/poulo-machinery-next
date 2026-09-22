'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface QuoteFormProps {
  initialMachineInterest?: 'air-jet' | 'water-jet' | 'not-sure';
}

export default function QuoteForm({ initialMachineInterest }: QuoteFormProps) {
  const getDefaultMachine = () => {
    if (initialMachineInterest === 'air-jet') return 'air_jet';
    if (initialMachineInterest === 'water-jet') return 'water_jet';
    return '';
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    machine: getDefaultMachine(),
    message: '',
    botField: '',
  });

  const [formStarted, setFormStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFocusOrChange = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('lead_form_start', { initial_interest: formData.machine });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    handleFocusOrChange();
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (formData.botField) {
      return;
    }

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Please enter your email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      trackEvent('lead_form_submit', {
        machine_interest: formData.machine,
      });
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center space-y-4">
        <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Inquiry Submitted!</h3>
        <p className="text-slate-700 text-sm max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. We have received your inquiry and our team at Poulo Machinery will contact you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormStarted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              machine: '',
              message: '',
              botField: '',
            });
          }}
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-2.5 rounded shadow-sm transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-5">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900">Contact & Inquiry Form</h3>
        <p className="text-slate-600 text-xs mt-1">
          Send us your requirement and our team will get back to you promptly.
        </p>
      </div>

      {errorMsg && (
        <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded text-xs flex items-center gap-2">
          <AlertCircle size={16} className="shrink-0 text-rose-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="botField"
          tabIndex={-1}
          value={formData.botField}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono text-slate-600 tracking-wider uppercase mb-2">
            FULL NAME <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-mono text-slate-600 tracking-wider uppercase mb-2">
            PHONE <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone"
            className="w-full text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono text-slate-600 tracking-wider uppercase mb-2">
            EMAIL <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="w-full text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
          />
        </div>

        {/* Machine Type */}
        <div>
          <label htmlFor="machine" className="block text-xs font-mono text-slate-600 tracking-wider uppercase mb-2">
            MACHINE TYPE
          </label>
          <select
            id="machine"
            name="machine"
            value={formData.machine}
            onChange={handleChange}
            className="w-full text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition-all"
          >
            <option value="">Select machine</option>
            <option value="air_jet">Air Jet Loom</option>
            <option value="water_jet">Water Jet Loom</option>
            <option value="rapier">Rapier Loom</option>
            <option value="parts">Parts & Accessories</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-slate-600 tracking-wider uppercase mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirement..."
          className="w-full text-sm border border-slate-300 rounded-lg px-3.5 py-2.5 text-slate-900 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent resize-none transition-all"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold text-sm px-8 py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Send Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
