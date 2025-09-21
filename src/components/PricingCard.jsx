import Button from './Button';
import './PricingCard.css';

const PricingCard = ({ packageData }) => {
  const { key, title, price, priceMin, priceMax, forWho, features, featured } = packageData;
  
  const formatPrice = () => {
    if (price) {
      return `$${price.toLocaleString('es-MX')}`;
    }
    if (priceMin && priceMax) {
      return `$${priceMin.toLocaleString('es-MX')} - $${priceMax.toLocaleString('es-MX')}`;
    }
    return 'Cotizar';
  };

  return (
    <div className={`pricing-card ${featured ? 'pricing-card--featured' : ''}`}>
      {featured && (
        <div className="pricing-card__badge">
          Más Popular
        </div>
      )}
      
      <div className="pricing-card__header">
        <h3 className="pricing-card__title">{title}</h3>
        <div className="pricing-card__price">
          <span className="price-amount">{formatPrice()}</span>
          {price && <span className="price-currency">MXN</span>}
        </div>
        <p className="pricing-card__description">{forWho}</p>
      </div>

      <div className="pricing-card__features">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="check-icon">
                <path 
                  d="M20 6L9 17L4 12" 
                  stroke="var(--color-primary)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="pricing-card__action">
        <Button 
          variant={featured ? 'hero' : 'primary'}
          href="#contacto"
          className="pricing-card__button"
        >
          {price ? 'Solicitar' : 'Cotizar'}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;