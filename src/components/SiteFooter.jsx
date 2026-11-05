import React from 'react';
import { COMPANY } from '../content/company';

export default function SiteFooter({ onNavigate }) {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="executive-container">
        <div className="footer-top-grid">
          {/* Corporate Information */}
          <div>
            <div className="font-serif" style={{ fontSize: '1.75rem', color: 'var(--color-ivory)', fontWeight: 700, marginBottom: '0.5rem' }}>
              {COMPANY.brandName}
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(243, 240, 232, 0.7)', maxWidth: '380px', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {COMPANY.legalName}. Institutional-grade managed operations, financial stewardship, and operational consulting for forward-thinking enterprises.
            </p>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-champagne)' }}>
              HQ: {COMPANY.corporateAddress}
            </div>
          </div>

          {/* Core Routes */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-link-list">
              <li><button onClick={() => onNavigate('home')}>Home</button></li>
              <li><button onClick={() => onNavigate('about')}>About the Firm</button></li>
              <li><button onClick={() => onNavigate('services')}>12 ERP &amp; Management Systems</button></li>
              <li><button onClick={() => onNavigate('insights')}>Consultancy &amp; Insights</button></li>
              <li><button onClick={() => onNavigate('work')}>Case Studies &amp; Portfolio</button></li>
              <li><button onClick={() => onNavigate('contact')}>Contact &amp; Enquiry</button></li>
            </ul>
          </div>

          {/* Communication & Inquiries */}
          <div>
            <h4 className="footer-col-title">Corporate Desk</h4>
            <ul className="footer-link-list">
              <li style={{ fontSize: '0.88rem' }}>
                <span style={{ display: 'block', color: 'var(--color-muted)', fontSize: '0.75rem' }}>ENQUIRIES</span>
                <a href={`mailto:${COMPANY.enquiryEmail}`}>{COMPANY.enquiryEmail}</a>
              </li>
              <li style={{ fontSize: '0.88rem', marginTop: '0.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-muted)', fontSize: '0.75rem' }}>DIRECT PHONE</span>
                <a href="tel:+918590212345">{COMPANY.contactPhone}</a>
              </li>
              <li style={{ fontSize: '0.88rem', marginTop: '0.5rem' }}>
                <span style={{ display: 'block', color: 'var(--color-muted)', fontSize: '0.75rem' }}>OFFICE HOURS</span>
                <span>{COMPANY.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="fine-rule-dark" style={{ marginBottom: '2rem' }} />

        {/* Bottom Legal & Copyright Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem' }}>
          <div>
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button onClick={() => onNavigate('privacy')}>Privacy Policy</button>
            <button onClick={() => onNavigate('terms')}>Terms of Service</button>
            <span style={{ color: 'var(--color-champagne)' }}>Design: The Executive Identity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

