import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY } from '../content/company';

export default function SiteHeader({ activeRoute = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'verticals', label: 'Verticals' },
    { id: 'services', label: '12 ERP Systems' },
    { id: 'insights', label: 'Consultancy & Insights' },
    { id: 'work', label: 'Our Work' },
    { id: 'contact', label: 'Contact' }
  ];

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu accessibly
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      <div className="executive-container site-header-inner">
        {/* Official Wordmark / Logo Placeholder */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="brand-wordmark-wrap text-left"
          aria-label={`${COMPANY.legalName} Homepage`}
        >
          <span className="brand-wordmark">{COMPANY.brandName}</span>
          <span className="brand-corporate-descriptor">BUSINESS SERVICES PVT. LTD.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav-list" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`nav-link-item ${activeRoute === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn-executive-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.8rem' }}
          >
            <span>Get in Touch</span>
            <ArrowRight size={14} />
          </button>
        </nav>

        {/* Accessible Mobile Menu Trigger Button (min 44px tap target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-trigger"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-nav-links">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`mobile-nav-link font-serif ${activeRoute === item.id ? 'active' : ''}`}
              >
                <span className="mobile-nav-num font-sans">0{idx + 1}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <button
              onClick={() => handleLinkClick('contact')}
              className="btn-executive-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
            >
              <span>Submit an Enquiry</span>
              <ArrowRight size={16} />
            </button>
            <p className="mobile-nav-legal">
              {COMPANY.legalName}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
