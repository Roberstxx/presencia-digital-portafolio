import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClass = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClass} 
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;