import React, { useEffect, useRef, useState } from "react";

const ContactFooter = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className={`contact-footer ${isVisible ? "visible" : ""}`}
    >
      <div className="footer-info">
        <h2 className="footer-name">Kevin Marks</h2>
        <p className="footer-thanks">Thanks for your Time</p>
      </div>
      <div className="footer-links">
        <a href="mailto:k.z.marks15@gmail.com" className="contact-link">
          k.z.marks15@gmail.com
        </a>
        <p className="contact-link">409.504.3701</p>
        <a
          href="https://www.linkedin.com/in/aboutkevinmarks"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
