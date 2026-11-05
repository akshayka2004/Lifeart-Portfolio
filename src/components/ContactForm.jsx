import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { SERVICES } from '../content/company';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief details of your operational inquiry.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }
    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent for your inquiry to be processed.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable transmission to approved endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div 
        style={{
          backgroundColor: 'var(--color-pale-green)',
          border: '1px solid var(--color-forest)',
          padding: '3rem 2rem',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'inline-flex', color: 'var(--color-forest)', marginBottom: '1rem' }}>
          <CheckCircle2 size={42} />
        </div>
        <h3 className="font-serif" style={{ fontSize: '2rem', color: 'var(--color-forest)', marginBottom: '0.75rem' }}>
          Enquiry Transmitted Successfully
        </h3>
        <p style={{ color: 'var(--color-charcoal)', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
          Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to our corporate advisory desk. A partner will review your requirements and respond within one business day.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '', consent: false });
          }}
          className="btn-executive-dark-outline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ backgroundColor: '#FFFFFF', padding: '2.5rem', border: '1px solid var(--color-border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {/* Name */}
        <div className="executive-form-group">
          <label htmlFor="name" className="executive-label">
            Full Name <span style={{ color: '#B91C1C' }}>*</span>
          </label>
          <input
            id="name"
            type="text"
            className="executive-input"
            placeholder="e.g. Eleanor Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p style={{ color: '#B91C1C', fontSize: '0.78rem', marginTop: '0.35rem' }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="executive-form-group">
          <label htmlFor="email" className="executive-label">
            Work Email Address <span style={{ color: '#B91C1C' }}>*</span>
          </label>
          <input
            id="email"
            type="email"
            className="executive-input"
            placeholder="e.g. e.vance@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p style={{ color: '#B91C1C', fontSize: '0.78rem', marginTop: '0.35rem' }}>{errors.email}</p>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        {/* Organization */}
        <div className="executive-form-group">
          <label htmlFor="company" className="executive-label">
            Organization / Company Name
          </label>
          <input
            id="company"
            type="text"
            className="executive-input"
            placeholder="e.g. Apex Industries"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        {/* Phone */}
        <div className="executive-form-group">
          <label htmlFor="phone" className="executive-label">
            Contact Number (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            className="executive-input"
            placeholder="+91 / International format"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Service of Interest */}
      <div className="executive-form-group">
        <label htmlFor="service" className="executive-label">
          Service Category of Interest
        </label>
        <select
          id="service"
          className="executive-select"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="">Select a service category...</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Corporate Advisory">General Corporate Consultation / Advisory</option>
        </select>
      </div>

      {/* Message */}
      <div className="executive-form-group">
        <label htmlFor="message" className="executive-label">
          Engagement Brief / Objectives <span style={{ color: '#B91C1C' }}>*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className="executive-textarea"
          placeholder="Please outline the current business challenges, scale of operations, and desired transition timeline..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p style={{ color: '#B91C1C', fontSize: '0.78rem', marginTop: '0.35rem' }}>{errors.message}</p>}
      </div>

      {/* Consent Checkbox */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--color-muted)' }}>
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            style={{ marginTop: '0.2rem', accentColor: 'var(--color-forest)' }}
          />
          <span>
            I acknowledge that information provided will be used exclusively by Lifeart Business Services Pvt. Ltd. to respond to this operational inquiry in accordance with standard non-disclosure practices.
          </span>
        </label>
        {errors.consent && <p style={{ color: '#B91C1C', fontSize: '0.78rem', marginTop: '0.35rem' }}>{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-executive-primary"
        style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
      >
        <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Corporate Enquiry'}</span>
        <ArrowRight size={16} />
      </button>
    </form>
  );
}

