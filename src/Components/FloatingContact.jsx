import React, { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappNumber = import.meta.env.VITE_APP_WHATSAPP || '9506580566';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Pooja,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect!`;

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}
    >
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'rgba(15, 23, 42, 0.85)',
            border: '1px solid #00e5ff',
            color: '#00e5ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 229, 255, 0.25)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(8px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00e5ff';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(15, 23, 42, 0.85)';
            e.currentTarget.style.color = '#00e5ff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <i className="bi bi-chevron-up fs-5"></i>
        </button>
      )}

      {/* Floating WhatsApp Widget */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          transition: 'all 0.3s ease',
          position: 'relative'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.12) translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.45)';
        }}
      >
        <i className="bi bi-whatsapp fs-3"></i>
      </a>
    </div>
  );
}
