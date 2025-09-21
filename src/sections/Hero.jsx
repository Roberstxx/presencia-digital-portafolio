import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg">
        <svg className="hero__wave" viewBox="0 0 1200 400" fill="none">
          <path 
            d="M0,200 Q300,50 600,150 T1200,100 L1200,400 L0,400 Z" 
            fill="url(#heroGradient)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container">
        <div className="hero__content split-layout">
          <div className="hero__left">
            <h1 className="hero__title">
              Haz que te encuentren 
              <span className="hero__title-accent"> y te elijan</span>
            </h1>
            
            <p className="hero__description">
              Landing pages rápidas, sitios profesionales, CMS y tiendas en línea. 
              Construimos primero lo esencial y escalamos contigo.
            </p>

            <div className="hero__actions">
              <Button variant="hero" href="#paquetes" size="lg">
                Ver paquetes
              </Button>
              <Button variant="ghost" href="#contacto" size="lg">
                Cotiza por WhatsApp
              </Button>
            </div>

            <div className="hero__trust-pills">
              <div className="trust-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Entrega ágil
              </div>
              <div className="trust-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                SEO incluido
              </div>
              <div className="trust-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Diseño responsive
              </div>
            </div>
          </div>

          <div className="hero__right">
            <div className="hero__visual">
              <div className="mockup-container">
                <div className="mockup mockup--desktop">
                  <div className="mockup__screen">
                    <div className="mockup__content">
                      <div className="mockup__header"></div>
                      <div className="mockup__body">
                        <div className="mockup__section"></div>
                        <div className="mockup__section"></div>
                        <div className="mockup__section"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mockup mockup--mobile">
                  <div className="mockup__screen">
                    <div className="mockup__content">
                      <div className="mockup__header"></div>
                      <div className="mockup__body">
                        <div className="mockup__section"></div>
                        <div className="mockup__section"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;