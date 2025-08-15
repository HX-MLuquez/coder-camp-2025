import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  // Estilos
  const containerStyle = { marginTop: '3rem' };
  const headingStyle = { 
    fontSize: '1.5rem', 
    fontWeight: 'bold', 
    color: '#1f2937', 
    marginBottom: '1.5rem' 
  };
  const successStyle = { 
    backgroundColor: '#f0fdf4', 
    color: '#166534', 
    padding: '1rem', 
    borderRadius: '0.5rem' 
  };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '1rem' };
  const labelStyle = { 
    display: 'block', 
    color: '#374151', 
    marginBottom: '0.5rem' 
  };
  const inputStyle = { 
    width: '100%', 
    padding: '0.5rem 1rem', 
    border: '1px solid #d1d5db', 
    borderRadius: '0.5rem',
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)',
    transition: 'all 0.3s ease'
  };
  const textareaStyle = { 
    ...inputStyle, 
    minHeight: '6rem',
    resize: 'vertical' 
  };
  const buttonStyle = { 
    backgroundColor: '#2563eb', 
    color: 'white', 
    fontWeight: '500', 
    padding: '0.5rem 1.5rem', 
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start'
  };
  const buttonHoverStyle = { backgroundColor: '#1d4ed8' };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contáctanos</h2>
      
      {submitted ? (
        <div style={successStyle}>
          ¡Gracias por tu mensaje! Te responderemos a la brevedad.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={formStyle}>
          <div>
            <label htmlFor="name" style={labelStyle}>Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" style={labelStyle}>Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" style={labelStyle}>Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={textareaStyle}
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;