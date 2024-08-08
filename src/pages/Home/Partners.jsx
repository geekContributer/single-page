import React from 'react';
import './home.css';
const link = "data:image/png;base64,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"
const partners = [
  { id: 1, src: link, alt: 'Company 1' },
  { id: 2, src: link, alt: 'Company 2' },
  { id: 3, src: link, alt: 'Company 3' },
  { id: 4, src: link, alt: 'Company 4' },
  { id: 5, src: link, alt: 'Company 5' },
  { id: 6, src: link, alt: 'Company 6' },
  { id: 7, src: link, alt: 'Company 7' },
  { id: 8, src: link, alt: 'Company 8' },
];

const PartnersSection = () => {
  return (
    <section className="partners-section py-5">
      <div className="container text-center">
        <h2 className="section-header mb-3">Our Partners</h2>
        
        <p className="section-description mb-4">
          <strong>Are proud to partner with leading organizations in the transportation and technology sectors to enhance our services and bring you the best possible experience on the road. Together, we are committed to innovation, safety, and efficiency, ensuring that your joumey is seamless and enjoyable.</strong>
        </p>
        
        <div className="row">
          {partners.map(partner => (
            <div key={partner.id} className="col-md-3 col-sm-4 mb-4">
              <img src={partner.src} alt={partner.alt} className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
