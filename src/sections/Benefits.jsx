import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      audience: "Consultorios y profesionales",
      title: "Confianza y agendamiento",
      description: "Muestra credenciales, ubicación y facilita el contacto.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      audience: "Emprendedores",
      title: "Vitrina 24/7",
      description: "Presenta servicios y promociones, capta leads con formularios.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      audience: "Negocios",
      title: "Más clientes y mejores decisiones",
      description: "SEO, analítica y embudos simples para crecer.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M3 3V21H21M7 12L10 9L13 12L18 7" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      audience: "Empresas",
      title: "Escalabilidad",
      description: "Catálogo, pagos y módulos a medida cuando los necesites.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="beneficios" className="benefits section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¿Por qué tener una página web?</h2>
          <p className="section-intro">
            Una presencia digital bien diseñada impulsa tu negocio las 24 horas del día.
          </p>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-card__icon">
                {benefit.icon}
              </div>
              <div className="benefit-card__content">
                <div className="benefit-card__audience">
                  {benefit.audience}
                </div>
                <h3 className="benefit-card__title">
                  {benefit.title}
                </h3>
                <p className="benefit-card__description">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;