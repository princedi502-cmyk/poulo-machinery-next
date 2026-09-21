'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface QuoteFormProps {
  initialMachineInterest?: 'air-jet' | 'water-jet' | 'not-sure';
}

export default function QuoteForm({ initialMachineInterest = 'not-sure' }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    cityState: '',
    machineInterest: initialMachineInterest === 'air-jet' ? 'Air Jet Loom' : initialMachineInterest === 'water-jet' ? 'Water Jet Loom' : 'Not sure',
    fabricType: '',
    yarnDetails: '',
    reedWidth: '',
    message: '',
    botField: '', // Honeypot spam protection
  });

  const [formStarted, setFormStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFocusOrChange = () => {
    if (!formStarted) {
      setFormStarted(true);
      trackEvent('lead_form_start', { initial_interest: formData.machineInterest });
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

    // Honeypot check
    if (formData.botField) {
      return;
    }

    // Required validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter a valid Phone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission / API processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      trackEvent('lead_form_submit', {
        machine_interest: formData.machineInterest,
        fabric_type: formData.fabricType,
        reed_width: formData.reedWidth,
      });
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center space-y-4">
        <CheckCircle2 size={48} className="text-emerald-600 mx-auto" />
        <h3 className="text-xl font-bold text-slate-900">Quotation Request Submitted!</h3>
        <p className="text-slate-700 text-sm max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Our sales engineering team at Poulo Machinery will review your fabric requirements and contact you promptly via WhatsApp or phone ({formData.phone}).
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormStarted(false);
            setFormData({
              name: '',
              company: '',
              phone: '',
              email: '',
              cityState: '',
              machineInterest: 'Not sure',
              fabricType: '',
              yarnDetails: '',
              reedWidth: '',
              message: '',
              botField: '',
            });
          }}
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-6 py-2.5 rounded shadow-sm transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900">Request a Technical Quotation</h3>
        <p className="text-slate-600 text-xs mt-1">
          Share your weaving parameters (fabric type, yarn count, reed width) for a tailored loom configuration quote.
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rajesh Patel"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1">
            Company / Mill Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Surat Weaving Mills"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone / WhatsApp Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* City / State */}
        <div>
          <label htmlFor="cityState" className="block text-xs font-semibold text-slate-700 mb-1">
            City & State
          </label>
          <input
            type="text"
            id="cityState"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            placeholder="e.g. Surat, Gujarat"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Machine Interest */}
        <div>
          <label htmlFor="machineInterest" className="block text-xs font-semibold text-slate-700 mb-1">
            Machine Interest <span className="text-rose-500">*</span>
          </label>
          <select
            id="machineInterest"
            name="machineInterest"
            value={formData.machineInterest}
            onChange={handleChange}
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="Air Jet Loom">PL920 Air Jet Loom</option>
            <option value="Water Jet Loom">PL5810 Water Jet Loom</option>
            <option value="Not sure">Not sure / Need Recommendation</option>
          </select>
        </div>

        {/* Fabric Type */}
        <div>
          <label htmlFor="fabricType" className="block text-xs font-semibold text-slate-700 mb-1">
            Target Fabric Type
          </label>
          <input
            type="text"
            id="fabricType"
            name="fabricType"
            value={formData.fabricType}
            onChange={handleChange}
            placeholder="e.g. Shirting, Denim, Polyester Taffeta"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        {/* Required Reed Width */}
        <div>
          <label htmlFor="reedWidth" className="block text-xs font-semibold text-slate-700 mb-1">
            Required Reed Width (cm)
          </label>
          <input
            type="text"
            id="reedWidth"
            name="reedWidth"
            value={formData.reedWidth}
            onChange={handleChange}
            placeholder="e.g. 190 cm, 230 cm, 280 cm"
            className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>

      {/* Yarn Details */}
      <div>
        <label htmlFor="yarnDetails" className="block text-xs font-semibold text-slate-700 mb-1">
          Yarn Specification / Count Details
        </label>
        <input
          type="text"
          id="yarnDetails"
          name="yarnDetails"
          value={formData.yarnDetails}
          onChange={handleChange}
          placeholder="e.g. Cotton 40s/1, Polyester 75D/36F"
          className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>

      {/* Message / Additional Requirements */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
          Additional Requirements / Target Output
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Include target monthly production capacity or specific shedding requirements (Cam/Dobby/Jacquard)..."
          className="w-full text-sm border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-y"
        />
      </div>

      {/* Consent Line & Submit */}
      <div className="space-y-3 pt-2">
        <p className="text-[11px] text-slate-500 leading-normal">
          By submitting this request, you agree to be contacted by Poulo Machinery regarding weaving loom configurations and technical quotations. Your data is kept strictly confidential.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-semibold text-sm px-8 py-3 rounded shadow-sm transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <span>Processing Request...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Submit Quotation Request</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

