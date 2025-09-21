import { useState } from 'react';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    paquete: '',
    mensaje: '',
    privacidad: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.paquete || !formData.privacidad) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }

    setIsSubmitting(true);

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        paquete: '',
        mensaje: '',
        privacidad: false
      });

      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cotiza tu proyecto</h2>
          <p className="section-intro">
            Cuéntanos sobre tu idea y te ayudaremos a hacerla realidad.
          </p>
        </div>

        <div className="contact__content split-layout">
          <div className="contact__form-container">
            {showThankYou ? (
              <div className="thank-you-message">
                <div className="thank-you-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>¡Gracias por tu interés!</h3>
                <p>Hemos recibido tu consulta. Te contactaremos pronto para discutir tu proyecto.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-input"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="form-input"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    placeholder="+52 xxx xxx xxxx"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="paquete" className="form-label">
                    Paquete de interés *
                  </label>
                  <select
                    id="paquete"
                    name="paquete"
                    className="form-select"
                    value={formData.paquete}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona un paquete</option>
                    <option value="Landing">Landing Page Básica</option>
                    <option value="Profesional">Página Profesional</option>
                    <option value="Con CMS">Sitio con CMS</option>
                    <option value="Tienda en línea">Tienda en Línea / Empresarial</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="form-textarea"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Describe brevemente tu negocio, objetivos y cualquier requerimiento específico..."
                  ></textarea>
                </div>

                <div className="form-group form-group--checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="privacidad"
                      checked={formData.privacidad}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">
                      Acepto el <a href="#" className="privacy-link">aviso de privacidad</a> *
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="form-submit"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </Button>
              </form>
            )}
          </div>

          <div className="contact__info">
            <div className="contact-card">
              <h3>Información de contacto</h3>
              
              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59344 1.99522 8.06403 2.16708 8.43842 2.48353C8.81282 2.79999 9.06926 3.23945 9.15999 3.72C9.33006 4.68007 9.62273 5.62273 10.03 6.53C10.1566 6.88792 10.1833 7.27691 10.1077 7.65088C10.0321 8.02485 9.85659 8.36811 9.58999 8.64L8.38999 9.84C9.80003 12.3679 11.6321 14.1999 14.16 15.61L15.36 14.41C15.6319 14.1434 15.9751 13.9679 16.3491 13.8923C16.7231 13.8167 17.1121 13.8434 17.47 13.97C18.3773 14.3767 19.3199 14.6694 20.28 14.84C20.7658 14.9315 21.2094 15.1917 21.5265 15.5717C21.8437 15.9516 22.0122 16.4296 21.1 16.92H22Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">WhatsApp</span>
                  <a href="https://wa.me/520000000000" className="contact-item__value" target="_blank" rel="noopener noreferrer">
                    +52 000 000 0000
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="contact-item__content">
                  <span className="contact-item__label">Email</span>
                  <a href="mailto:contacto@presenciadigital.mx" className="contact-item__value">
                    contacto@presenciadigital.mx
                  </a>
                </div>
              </div>

              <div className="social-links">
                <h4>Síguenos</h4>
                <div className="social-icons">
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.291L6.89 14.102c.48.577 1.227.918 2.097.918 1.297 0 2.274-.997 2.274-2.274 0-1.297-.977-2.274-2.274-2.274-.87 0-1.617.341-2.097.918L5.121 9.795c.88-.801 2.031-1.291 3.328-1.291 2.699 0 4.881 2.182 4.881 4.881 0 2.699-2.182 4.881-4.881 4.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;