'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    pickupLocation: '',
    dropoffLocation: '',
    pickupTime: '',
    pickupDate: '',
    itemType: '',
    email: '',
    info: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you shortly.');
    console.log(formData);
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    background: 'white',
    fontSize: '1rem',
    color: 'var(--navy)',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: 'var(--navy)',
    marginBottom: '8px',
    marginLeft: '4px'
  };

  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Header */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Get a Quote
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Make an <span className="text-orange">Enquiry</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            Fill out the form below and our team will provide a tailored logistics estimate.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding" style={{ background: 'var(--off-white)', flexGrow: 1 }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ 
            background: 'white', 
            padding: 'clamp(24px, 6vw, 60px)', 
            borderRadius: '30px', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
            border: '1px solid var(--border)'
          }} className="animate-fade-up">
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              {/* Full Name */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Full Name*</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe" 
                  style={inputStyle} 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="focus:border-orange focus:ring-2 focus:ring-orange/20"
                />
              </div>

              {/* Pickup Location */}
              <div>
                <label style={labelStyle}>Pickup Location*</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Street name, City, Postcode" 
                  style={inputStyle}
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                />
              </div>

              {/* Drop off Location */}
              <div>
                <label style={labelStyle}>Drop off Location*</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Street name, City, Postcode" 
                  style={inputStyle}
                  value={formData.dropoffLocation}
                  onChange={(e) => setFormData({...formData, dropoffLocation: e.target.value})}
                />
              </div>

              {/* Pickup Time */}
              <div>
                <label style={labelStyle}>Pickup Time*</label>
                <input 
                  type="time" 
                  required 
                  style={inputStyle}
                  value={formData.pickupTime}
                  onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
                />
              </div>

              {/* Pickup Date */}
              <div>
                <label style={labelStyle}>Pickup Date*</label>
                <input 
                  type="date" 
                  required 
                  style={inputStyle}
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                />
              </div>

              {/* Type of Items */}
              <div>
                <label style={labelStyle}>Type of Items*</label>
                <select 
                  required 
                  style={inputStyle}
                  value={formData.itemType}
                  onChange={(e) => setFormData({...formData, itemType: e.target.value})}
                >
                  <option value="">Select Category</option>
                  <option value="furniture">Furniture</option>
                  <option value="parcels">Small Parcels</option>
                  <option value="office">Office Equipment</option>
                  <option value="removal">Full House Removal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email Address*</label>
                <input 
                  type="email" 
                  required 
                  placeholder="your@email.com" 
                  style={inputStyle}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* More Information */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>More Information*</label>
                <textarea 
                  required 
                  rows={5} 
                  placeholder="Tell us more about your delivery needs..." 
                  style={{ ...inputStyle, resize: 'vertical' }}
                  value={formData.info}
                  onChange={(e) => setFormData({...formData, info: e.target.value})}
                ></textarea>
              </div>

              {/* Submit */}
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '10px' }}>
                <button type="submit" className="btn-primary" style={{ padding: '16px 40px', width: '100%', maxWidth: '400px', fontSize: '1.1rem', justifyContent: 'center' }}>
                  Submit Enquiry
                </button>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginTop: '16px' }}>
                  By submitting, you agree to our privacy policy and terms of service.
                </p>
              </div>

            </form>
          </div>

          {/* Quick Contact info */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '60px' }}>
            {[
              { icon: '📞', title: 'Call Us', text: '+44 20 1234 5678' },
              { icon: '✉️', title: 'Email Us', text: 'info@routx-logistics.com' },
              { icon: '📍', title: 'Visit Us', text: 'Suite RA01, London, E17 3NU' }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '30px', background: 'white', borderRadius: '20px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '15px' }}>{item.icon}</div>
                <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '5px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-gray)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <Clients />

      <Footer />
    </main>
  );
}
