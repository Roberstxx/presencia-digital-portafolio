import PricingCard from '../components/PricingCard';
import packagesData from '../data/packages.json';
import './Packages.css';

const Packages = () => {
  return (
    <section id="paquetes" className="packages section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Paquetes</h2>
          <p className="section-intro">
            Elige el punto de partida. Todo es escalable.
          </p>
        </div>

        <div className="packages__grid">
          {packagesData.packages.map((packageItem) => (
            <PricingCard 
              key={packageItem.key} 
              packageData={packageItem}
            />
          ))}
        </div>

        <div className="packages__note">
          <p>
            <strong>¿No encuentras lo que buscas?</strong> Todos los paquetes son personalizables. 
            Contáctanos para una cotización específica para tu proyecto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;